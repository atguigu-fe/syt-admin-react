import type { FormData } from '#/form'
import type { PageServerResult, PaginationData, Status } from '#/public'
import { request } from '@/utils/request'

enum API {
  URL = '/admin/user'
}

/**
 * 查询医院设置列表
 * @param data - 请求数据
 */
export const getMemberList = (data: Partial<FormData> & PaginationData) => {
  return request.get<PageServerResult<FormData[]>>(
    `${API.URL}/${data.page}/${data.pageSize}`, {
    params: {
      keyword: data.keyword,
    }
  })
}

/**
 * 锁定用户
 * @param data - 请求数据
 */
export function lockMember(id: string, status: Status) {
  return request.get(`${API.URL}/lock/${id}/${status}`)
}
