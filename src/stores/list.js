import { defineStore } from 'pinia'
import link from '@/api/link'
const useList = defineStore("list", {
    state: () => {
        return {
            data: []
        }
    },
    actions: {

    }
})

export default useList