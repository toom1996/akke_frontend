import axios from "axios";
// import qs from "qs";

const service = axios.create({
    timeout:30000,
    baseURL: 'http://127.0.0.1:6688/',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json'
    }
})
service.interceptors.request.use(
    (config) => {
        config.url = `${config.url}`
        // console.log(config)
        return config
    },
    (error) => {
        console.log(error)
    }
)

service.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log(error)
        // throw '网络异常'
        // return error
    }
)

export function get(url: string, params = {}): Promise<any> {
    return new Promise((resolve, reject) => {
        service.get(url, {
            params: params
        }).then(response => {
            if (response?.data?.code != 0) {
                // console.log(response.data.msg)
                resolve(null)
            }
            resolve(response?.data?.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export function post(url: string, params = {}): Promise<any> {
    return new Promise((resolve, reject) => {
        service.postForm(url, params).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}