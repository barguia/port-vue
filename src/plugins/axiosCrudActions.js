export default class Crud
{
    constructor(axios, url)
    {
        this.url = url
        this.axiosApi = axios
    }

    createNewItem()
    {
        return async ({ commit }, payload) => {
            const resp = await this.axiosApi.post(this.url, payload).then(response => {
                return response.data;
            })
            return resp
        }
    }

    getItemById()
    {
        return async ({ commit }, payload) => {
            const resp = await this.axiosApi.get(`${this.url}/${ payload.id }`, payload).then(response => {
                return response.data;
            })
            return resp
        }


    }

    updateItem()
    {
        return async ({ commit }, payload) => {
            const resp = await this.axiosApi.put(`${this.url}/${ payload.id }`, payload).then(response => {
                return response;
            })
            return resp
        }
    }

    getIndex()
    {
        return async ({ commit }, payload) => {
            const resp = await this.axiosApi.get(this.url).then(response => {
                commit('SET_LIST', response.data.data)
            })
            return resp
        }
    }

    _delete()
    {
        return async ({ commit }, payload) => {
            const resp = await this.axiosApi.delete(`${this.url}/${ payload.id }`).then(response => {
                return response.data
            })
            return resp
        }
    }
}