import axios from 'axios';
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
// 创建axios实例
const service = axios.create({
  timeout: 5000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    // Do something with request error
    Promise.reject(error);
  });
// response 拦截器
service.interceptors.response.use(
  (response: any) => {
    /**
     *  code业务逻辑可以自定义
     */
    const res = response.data;
    if (res.success) {
      return res;
    } else {
      Toast.fail(res.message);
      return res;
    }
  },
  (error: any) => {
    Toast.fail(error.message);
    return Promise.reject(error);
  });

export default service;
