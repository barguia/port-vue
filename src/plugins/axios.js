import axios from 'axios'

const appApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});
appApi.interceptors.response.use((response) => {
    return response
}, (error) => {
    console.log(error)
    if (error.response.status === 422) {
        console.log(error.response.data.errors)
    }

    if (error.response.status === 401) {
        console.log('acesso nao autorizado')
    }
})

appApi.interceptors.request.use((request) => {
    let user = JSON.parse(sessionStorage.getItem('user'))

    if (user && user.access_token) {
        request.headers['Authorization'] = `Bearer ${ user.access_token }`
    }
    return request;
})

export default appApi