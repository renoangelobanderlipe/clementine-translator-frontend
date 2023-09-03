import { create } from 'apisauce'

const api = create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const fetchLanguages = () => api.get('api/v1/languages')
export const translate = (params) => api.post('api/v1/translator', params)

export default api;