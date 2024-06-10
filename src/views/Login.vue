<template>
    <div>
        <div class="loginBox">
            <!-- login - page -->
            <ul class="loginTab">
                <li v-for="data in menuData" :key="data.type" @click="handleClick(data)"
                    :class="{ current: data.current }">
                    {{ data.title }}
                </li>
            </ul>
        </div>
        <!-- 表单 -->
        <div class="loginForm">
            <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules"
                class="demo-ruleForm">
                <el-form-item prop="email" class="item-form">
                    <label for="Email">邮箱</label>
                    <el-input v-model="ruleForm.email" type="text" autocomplete="off" />
                </el-form-item>
                <el-form-item prop="pass" class="item-form">
                    <label for="password">密码</label>
                    <el-input v-model="ruleForm.pass" type="password" autocomplete="off" minlength="6" maxlength="20" />
                </el-form-item>
                <el-form-item prop="pass" class="item-form" v-show="model === 'register'">
                    <label for="pascheck">重复密码</label>
                    <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" minlength="6"
                        maxlength="20" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)" class="login-btn" :disabled="btnbool">
                        {{ model === 'login' ? "登录" : "注册" }}
                    </el-button>
                    <el-button @click="resetForm(ruleFormRef)" class="login-btn">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>

<script setup>
    import { reactive, ref, watch } from 'vue'
    import { verificationEmail, verificationPassword } from "../utils/verification.js"
    import link from '@/api/link';
    import { ElMessage } from 'element-plus'
    import useMd5 from '../hooks/useMd5.js'
    import { useRouter } from 'vue-router'
    // import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
    // import 'element-plus/es/components/form/style/css'
    // import 'element-plus/es/components/form-item/style/css'
    // import 'element-plus/es/components/input/style/css'
    // import 'element-plus/es/components/button/style/css'


    const menuData = reactive([
        { title: "登录", current: true, type: "login" },
        { title: "注册", current: false, type: "register" },
    ]);
    const model = ref("login");

    const handleClick = (data => {
        menuData.forEach((item) => {
            item.current = false;
        });
        data.current = true;
        model.value = data.type;
    })

    const ruleFormRef = ref(null)

    const checkEmail = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('请输入邮箱'))
        } else if (!verificationEmail(value)) {
            return callback(new Error('邮箱格式不正确！'))
        } else {
            callback()
        }
    }

    const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入6-20位由数字和字母组成的密码'))
        } else if (!verificationPassword(value)) {
            callback(new Error("密码格式有误！！请输入6-20位由数字和字母组成的密码"))
        } else {
            callback()
        }
    }
    const validatePass2 = (rule, value, callback) => {

        if (model.value === 'login') {
            callback()
        }

        if (value === '') {
            callback(new Error('请再次输入密码'))
        } else if (value !== ruleForm.pass) {
            callback(new Error("两次密码不同！"))
        } else {
            callback()
        }
    }

    const ruleForm = reactive({
        email: "",
        pass: '',
        checkPass: '',
    })
    // 这里是设置设置 以何种方式触发 表单验证 默认是blur失去焦点验证
    // 当触发了blur事件后就会调用前面的 函数从而进行表单验证
    const rules = reactive({
        email: [{ validator: checkEmail, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
    })


    let btnbool = ref(true)

    watch(ruleForm, (newval) => {
        // console.log(newval)
        if (model.value === 'login') {
            if (newval.email !== '' && newval.pass !== "") {
                btnbool.value = false
            } else {
                btnbool.value = true
            }
        } else {
            if (newval.email !== '' && newval.pass !== "" && newval.checkPass !== '') {
                btnbool.value = false
            } else {
                btnbool.value = true
            }
        }
    })
    let router = useRouter()

    const submitForm = (formEl) => {
        if (!formEl) return
        formEl.validate((valid) => {
            if (valid) {
                console.log('submit!')
                console.log(ruleForm)
                let data = {
                    "email": ruleForm.email,
                    "password": useMd5(ruleForm.pass).value
                }

                if (model.value === "register") {
                    console.log("注册")
                    link("http://localhost:3000/register", "post", data).then((ok) => {
                        console.log(ok)
                        let { data } = ok
                        if (Object.keys(data).length !== 0) {
                            // ElMessage("注册成功")
                            ElMessageBox.alert('注册成功', '提示', {
                                // if you want to disable its autofocus
                                // autofocus: false,
                                confirmButtonText: 'OK',
                                callback: (action) => {
                                    ElMessage({
                                        type: 'info',
                                        // message: `action: ${action}`,
                                    })
                                },
                            })
                            model.value = 'login'
                            menuData.forEach((item) => {
                                item.type === 'login' ? item.current = true : item.current = false;
                            })

                        } else {
                            // ElMessage.error("注册失败")
                            ElMessageBox.alert('注册失败', '提示', {
                                // if you want to disable its autofocus
                                // autofocus: false,
                                confirmButtonText: 'OK',
                                callback: (action) => {
                                    ElMessage({
                                        type: 'info',
                                        // message: `action: ${action}`,
                                    })
                                },
                            })
                        }
                    })
                }
                if (model.value === "login") {
                    link(`http://localhost:3000/register?email=${ruleForm.email}&passward=${useMd5(ruleForm.pass).value}`, 'get')
                        .then(ok => {
                            // console.log(ok)
                            let { data } = ok
                            if (data.length !== 0) {
                                // console.log("登录成功")
                                // ElMessage("登录成功")
                                ElMessageBox.alert('登录成功', '提示', {
                                    // if you want to disable its autofocus
                                    // autofocus: false,
                                    confirmButtonText: 'OK',
                                    callback: (action) => {
                                        ElMessage({
                                            type: 'info',
                                            // message: `action: ${action}`,
                                        })
                                    },
                                })
                                router.push("/home")
                            } else {
                                // console.log("登录失败")
                                ElMessageBox.alert('登录失败', '提示', {
                                    // if you want to disable its autofocus
                                    // autofocus: false,
                                    confirmButtonText: 'OK',
                                    callback: (action) => {
                                        ElMessage({
                                            type: 'info',
                                            // message: `action: ${action}`,
                                        })
                                    },
                                })
                            }

                        })
                }
            } else {
                console.log('error submit!')
            }
        })
    }
    const resetForm = (formEl) => {
        if (!formEl) return
        formEl.resetFields()
    }

</script>

<style scoped lang="scss">


    .loginTab {
        text-align: center;
        line-height: 50px;
        margin: 10px 0;

        li {
            display: inline-block;
            background-color: #409EFF;
            border-radius: 10px;
            width: 100px;
            cursor: pointer;
            color: white
        }

        .current {
            background-color: darken($color: #409EFF, $amount: 10%);
        }
    }

    .demo-ruleForm {
        width: 30%;
        margin: 50px auto;

        label {
            display: block;
            margin-bottom: 3px;
        }

        .item-form {
            margin-bottom: 15px;
        }

        .block {
            display: block;
            width: 100%;
        }

        .login-btn {
            margin-top: 20px;
        }

    }
</style>
