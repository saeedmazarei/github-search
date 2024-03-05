import api from './config'

export const getUser = (query) => api.get(`search/users?q=${query}`)

export const getUserDetail = (userName) => api.get(`users/${userName}`)
