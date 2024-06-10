import { defineStore } from 'pinia'
const useRightTop = defineStore("rightTop", {
    state: () => {
        return {
            isFold: true
        }
    }
})

export default useRightTop
