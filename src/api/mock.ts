import Mock from 'mockjs'

Mock.mock('/api/v1/frontend/main/search', 'get', {
    status: 200,
    message: 'ok',
    data: ['a', 'b', 'c']
});