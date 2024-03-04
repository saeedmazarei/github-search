import api from './config'

export const getUser = (username) => api.get(`search/users/${username}`)
