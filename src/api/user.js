import { request } from '@/utils/request'

// 用户注册接口
export const registeredApi = (username, password) => {
  return request({
    url: '/user/registered',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

// 用户登录接口
export const loginApi = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

// 获取用户信息资料
export const getUserApi = (token) => {
  return request({
    url: '/user',
    headers: {
      authorization: token
    }
  })
}

// /user/favorites 查看收藏列表

export const getFavoritesApi = (token) => {
  return request({
    url: '/user/favorites',
    headers: {
      authorization: token
    }
  })
}
// GET /user/favorites/{id} 房屋是否收藏

export const getIsFavoritesApi = (token, id) => {
  return request({
    url: '/user/favorites',
    headers: {
      authorization: token
    },
    params: {
      id
    }
  })
}

// POST /user/favorites/{id} 添加收藏
// DELETE /user/favorites/{id} 删除收藏

// 查看已发布房源
export const getRentedApi = (token) => {
  return request({
    url: '/user/houses',
    headers: {
      authorization: token
    }
  })
}
