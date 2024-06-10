<template>
    <!-- 住户列表 -->
    <el-input v-model="input" style="width: auto" placeholder="请输入住户姓名" />

    <ShowList />
</template>

<script setup>
    import { ref, computed, provide, onMounted } from 'vue'
    import ShowList from '../../../components/ShowList.vue'
    import link from '../../../api/link.js'

    const input = ref('')
    const tableData = ref([])
    console.log(input.value)
    onMounted(() => {
        link(`http://localhost:3000/user`, 'get').then((ok) => {
            // console.log(ok.data)
            tableData.value = ok.data
            // console.log(tableData.value)
        })
    })


    const filterTableData = computed(() =>
        tableData.value.filter(
            (data) =>
                !input.value ||
                data.name.toLowerCase().includes(input.value.toLowerCase())
        )
    )
    provide("tableData", filterTableData)
</script>