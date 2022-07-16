import { request } from '@/utils/request'

// 首页轮播图
export const getSwiperApi = () => {
  return request({
    url: '/home/swiper'
  })
}

// 租房小组
export const getGroupsApi = () => {
  return request({
    url: '/home/groups',
    query: {
      area: 'AREA%257C88cff55c-aaa4-e2e0'
    }
  })
}
