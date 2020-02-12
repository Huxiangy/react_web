/*
 * 封装axios 实现http异步请求
*/

import axios from 'axios';

// 根据登录时登录信息如何存储 这里使用localStorage
const token = localStotage.getItem('token');

const instance = axios.create({
    // baseURL: 'https://huxiangyan.react.com/api/',  baseUrl 根据实际需求决定是否进行设置
	timeout: 5000   // 设置超时时间
});

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 设置拦截器
instance.interceptors.request.use(
	config => {
		token && (config.headers.Authorization = taken)
		return config;
	},
	error => {
		return Promise.reject(error);
	}
)

instance.interceptors.response.use(
	response => {
		if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
	},
	error => {
		// 错误处理
        switch (error.response.status) {
            case 401:
            	// to fo something
                break
            case 403:
            	// to fo something
                break
            case 404:
            	// to fo something
                break
            case 500:
            	// to fo something
                break
            default:
                console.log('其他错误信息')
        }
        return Promise.reject(error)
	}
)


export default instance
