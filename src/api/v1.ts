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


export function gallaryIndex (params:object) {
    return isDevMode ? generateMockData({
        'list|10-20': [{
            'id|+1': 1,
            // https://assets.vogue.com/photos/5ba66fd82d53962db47f091a/master/w_1280,c_limit/_ARC0085.jpg
            'src': 'https://assets.vogue.com/photos/5ba66fd82d53962db47f091a/master/w_1280,c_limit/_ARC0085.jpg', // '@image(200x200)',
            // 'src': 'https://img01.sxxl.com/adption/2024/0109/0910/Thom_Browne_2024早秋_纽约_大衣_人字纹_-_-20240109104553877074_c_720_1080_75.jpg', // '@image(200x200)',
            // 'src': 'https://img01.sxxl.com/adption/2024/0109/0910/Thom_Browne_2024早秋_纽约_大衣_人字纹_-_-20240109104553877074_c_720_1080_75.jpg', // '@image(200x200)',
          }]
    }) : get('/api/v1/frontend/main/search', params)
}