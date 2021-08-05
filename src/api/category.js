import request from '@/utils/request';

// 獲取文章分類表
export default{
    getList(query, current = 1, size = 10) {
        return request({
            url: `/article/category/search`,
            method: 'post',
            data:{
                ...query,
                current,
                size
            }
        })
    }
}