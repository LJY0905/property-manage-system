import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            isFold: true,
            dialogFormVisible: false
        }
    },
    mutations: {
        ChangeFold(state) {
            state.isFold = !state.isFold
        },
        ChangeForm(state) {
            state.dialogFormVisible = !state.dialogFormVisible
        }
    }
})

export default store