<template>
    <!-- 住户信息更新 -->
    <el-button @click="handleEdit">修改</el-button>
    <!-- <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
    <el-button type="danger" @click="handleDelete">删除</el-button>
    <span>(请点击要修改或删除之后的数据后再点击“修改”/“删除”按钮)</span>
    <el-button @click="handleAdd">增加</el-button>
    <ShowList @clickdata="handleClickData" />
    <UpdateDialog @updateData="handleUpdate" />

</template>
<script setup>
    import { ref, provide, onMounted } from 'vue'
    import ShowList from '../../../components/ShowList.vue'
    import link from '../../../api/link.js'
    import useUpdateDialog from '../../../stores/updateDialog.js'
    import UpdateDialog from '../../../components/UpdateDialog.vue'

    const tableData = ref([])
    onMounted(() => {
        link(`http://localhost:3000/user`, 'get').then((ok) => {
            // console.log(ok.data)
            tableData.value = ok.data
            // console.log(tableData.value)
        })
    })

    provide("tableData", tableData)
    const changeData = ref([])

    const handleClickData = (row) => {
        changeData.value = row
        console.log(changeData.value)
    }
    const method = ref('')

    const updateDialogStore = useUpdateDialog()
    const handleEdit = () => {
        // console.log(index, row);
        updateDialogStore.dialogFormVisible = true
        method.value = 'PUT'
    }
    // const handleDelete = (index, row) => {
    //     console.log(index, row);
    // };

    const handleAdd = () => {
        // console.log(index, row);
        updateDialogStore.dialogFormVisible = true
        method.value = 'POST'
    }

    const handleUpdate = (message) => {
        link(`http://localhost:3000/user`, 'get').then((ok) => {
            // console.log(ok.data)
            tableData.value = ok.data
            // console.log(tableData.value)
        })
    }

    const handleDelete = () => {
        link(`http://localhost:3000/user?name=${changeData.value.name}`, 'DELETE').then((ok) => {
            // console.log(ok.data)
            tableData.value = ok.data
            // console.log(tableData.value)
        })
    }

    provide("changeData", changeData)
    provide("method", method)
</script>