import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://5.135.119.239:3090',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
    getNotes() {
      return apiClient.get('/notes')  
    },    
    getNote(id) {
        return apiClient.get(`/notes/${id}`)  
    },    
    postNote(form) {
        return apiClient.post(`/notes`, form)  
    },    
    deleteNote(id) {
        return apiClient.delete(`/notes/${id}`)  
    },    
    putNote(id, form) {
        return apiClient.put(`/notes/${id}`, form)  
    }
}
