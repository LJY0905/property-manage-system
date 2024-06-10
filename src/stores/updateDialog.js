import { defineStore } from 'pinia'
const useUpdateDialog = defineStore("updateDialog", {
    state: () => {
        return {
            dialogFormVisible: false
        }
    }
})

export default useUpdateDialog