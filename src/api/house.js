import { request } from '@/utils/request'

export const getHouseApi = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
