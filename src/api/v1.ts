import { post, get } from '@/utils/request'
// import Mock from 'mockjs'

let isDevMode = import.meta.env.MODE === 'development';

function generateMockData(mockRules:Object = {}) {
    return new Promise((resolve, reject) => {
        const Mock = import('mockjs');
        Mock.then(e => {
            let mockData = e.mock(mockRules)
            console.log(mockData)
            resolve(mockData)
        })
    })
}

export function mainSearch (params:object) {
    console.log(isDevMode)
    return isDevMode ? generateMockData({
        'list|10-20': [{
            'id|+1': 1,
            'title': '@ctitle(5, 20)',
            'img_count|+1':100,//整数'
            'cover': '@image(200x200)',
            'brand_srt': '@word(5, 20)',
            'src': '/gallary?id=' + '@domain'
          }]
    }) : get('/api/v1/frontend/main/search', params)
}
