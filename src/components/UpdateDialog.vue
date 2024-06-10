<template>
    <el-dialog v-model="updateDialogStore.dialogFormVisible" title="更新信息" width="500">
        <el-form :model="form">
            <el-form-item label="Name" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Address" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="updateDialogStore.dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="handelConfirm">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup>
    import { inject, reactive, ref } from 'vue'
    import useUpdateDialog from '../stores/updateDialog.js'
    import link from '@/api/link';

    const updateDialogStore = useUpdateDialog()
    const formLabelWidth = '140px'
    const form = reactive({
        name: '',
        address: ''
    })
    console.log(form)
    const changeData = inject('changeData')
    const method = inject("method")
    console.log(changeData.value.name)
    const emit = defineEmits(['updateData'])
    const handelConfirm = () => {

        let data = {
            name: form.name,
            address: form.address
        }
        console.log(data, changeData.value.name, method.value)
        if (method.value === "POST") {
            link(`http://localhost:3000/user`, "post", data).then((ok) => {
                console.log(ok.data)
            }).catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
            });

        }
        if (method.value === "PUT") {
            let param = changeData.value.name
            console.log(param)
            link(`http://localhost:3000/user/?name=${param}`, "put", data).then((ok) => {
                console.log(ok.data)
            }).catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
            });
        }
        updateDialogStore.dialogFormVisible = false
        emit('updateData', '111')
    }

</script>

<style scoped>
    .el-button--text {
        margin-right: 15px;
    }

    .el-select {
        width: 300px;
    }

    .el-input {
        width: 300px;
    }

    .dialog-footer button:first-child {
        margin-right: 10px;
    }
</style>