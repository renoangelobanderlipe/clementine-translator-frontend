import { create } from 'apisauce'

const api = create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const fetchLanguages = () => api.get('api/v1/languages')

export default api;