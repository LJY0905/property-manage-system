import axios from "axios"

const service = axios.create()

//请求拦截器
service.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(function (response) {
    return response
}, function (error) {
    console.log(error)
    switch (error.response.status) {
        case 404:
            console.log("url信息有误")
            break;
        case 500:
            console.log("服务器有问题")
            break;

        default:
            console.log("未知错误")
            break;
    }
    return Promise.reject(error)
})

export default service