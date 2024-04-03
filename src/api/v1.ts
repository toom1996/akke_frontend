import { post, get } from '@/utils/request'
// import Mock from 'mockjs'

let isDevMode = true//import.meta.env.MODE === 'development';


export function mainSearch (params:object) {
    return get('/api/v1/frontend/main/search', params)
}


export function gallaryIndex (params:object) {
    return get('/api/v1/frontend/main/search', params)
}

export function buildIndex (params:object) {
    return get('/api/v1/build', params)
}


// --------------------------------------------------------
export function fashionShow (params:object = {}) {
    let url = isDevMode ? 'runway' : '/api/v1/runway'
    return get(url, params)
}

export function view (params:object) {
    let url = isDevMode ? 'view' : '/api/v1/view'
    return get(url)
}