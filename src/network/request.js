import axios from 'axios'
import Vue from 'vue'
const vue = new Vue()

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    timeout: 5000
  })

  //axios拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    vue.$bus.$emit("requsetErr",err)
    console.log(err)
    vue.$toast.show('请求失败')
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    if (res.status != 200) {
      vue.$toast.show('请求失败')
    }
    return res.data
  }, err => {
    console.log(err)
    vue.$bus.$emit("requsetErr",err)
    vue.$toast.show('请求失败')
  })

  //发送网络请求
  return instance(config)
}

