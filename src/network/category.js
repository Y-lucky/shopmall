import { request } from './request'

// 获取分类列表
export function getcategoryList() {
    return request({
        url: '/category',
    })
}



export function getcategoryGoods(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}

export function getCategoryDetail(miniWallkey, type) {
    return request({
        url: "/subcategory/detail",
        params: {
            miniWallkey,
            type
        }
    })
}