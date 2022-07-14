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
