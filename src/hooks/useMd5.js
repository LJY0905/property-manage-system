import md5 from 'js-md5'
import { ref } from "vue"
const useMd5 = (data) => {
    let mdData = ref(md5(data))//加密数据
    return mdData
}

export default useMd5