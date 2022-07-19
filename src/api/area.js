import { request } from '@/utils/request'

// 获取城市列表数据
export const getAreaApi = () => {
  return request({
    url: '/area/city',
    params: {
      level: 1
    }
  })
}
// /area/hot获取热门城市列表数据
export const getHotAreaApi = () => {
  return request({
    url: '/area/hot'
  })
}
