<template>
    <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%"
        @row-click='handelClick'>
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
    </el-table>
    <el-pagination layout="total, sizes, prev, pager, next, jumper" :total="tableData.length"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" />
</template>

<script setup>
    import { ref, inject, defineEmits } from 'vue'

    const currentPage = ref(1)
    const pageSize = ref(10)
    const handleSizeChange = (val) => {
        console.log(`${val} items per page`)
        pageSize.value = val;
    }
    const handleCurrentChange = (val) => {
        console.log(`current page: ${val}`)
        currentPage.value = val;
    }

    const tableData = inject('tableData')
    const emit = defineEmits(['clickdata'])

    const handelClick = (row) => {
        // console.log("1123", row)
        emit('clickdata', row)

    }
</script>

<style></style>