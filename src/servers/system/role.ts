/*
 * @Author: 朽木白
 * @Date: 2023-05-17 14:21:10
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2023-05-19 11:38:27
 * @Description: 角色接口
 */

import type { FormData } from '#/form'
import type { PageServerResult, PaginationData } from '#/public'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'
import { request } from '@/utils/request'

enum API {
  URL = '/admin/acl/role'
}

/**
 * @description: 获取后台角色分页列表(带搜索)
 * @param {GetUserListParams} param
 * @returns {*}
 */
export const getRoleList = (data: Partial<FormData> & PaginationData) => {
  return request.get<PageServerResult<FormData[]>>(
    `${API.URL}/${data.page}/${data.pageSize}`, {
    params: { username: data.username }
  })
}

/**
 * 删除
 * @param id - 删除id值
 */
export function deleteRole(id: string) {
  return request.delete(`${API.URL}/remove/${id}`)
}

/**
 * 新增数据
 * @param data - 请求数据
 */
export function createRole(data: FormData) {
  return request.post(`${API.URL}/save`, data)
}

/**
 * 修改数据
 * @param id - 修改id值
 * @param data - 请求数据
 */
export function updateRole(data: FormData) {
  return request.put(`${API.URL}/update`, data)
}

/**
 * 删除
 * @param id - 获取角色列表
 */
export function getAssignList(adminId: string) {
  return request.get(`${API.URL}/toAssign/${adminId}`)
}

/**
 * 删除
 * @param id - 分配角色
 */
export function doAssign(adminId: number | string, roleId: CheckboxValueType[]) {
  return request.post(`${API.URL}/doAssign?adminId=${adminId}&roleId=${roleId}`)
}