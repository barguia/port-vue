import appApi from "@/plugins/axios"

class Crud
{
    constructor(route, axiosApi = false) {
        this.api = false
        this._setApi(axiosApi)
        this.route = route

    }

    _setApi(axiosApi) {
        if (!axiosApi) this.api = appApi
        else this.api = axiosApi
    }

    index({commit}, payload) {
        this.api.get(`${ this.route }/${ payload.id }`)
            .then(response => {
                commit('SET_LIST', response.data)
            })
        return false
    }

    async create(payload) {
        const resp = await this.api.post(this.route, payload)
            .then(response => {
                return response.data;
            })
        return resp
    }

    async update(payload) {
        const resp = await this.api.put(`${ this.route }/${ payload.id }`, payload)
            .then(response => {
                return response.data;
            })
        return resp
    }

    async delete(payload) {
        const resp = await this.api.delete(`${ this.route }/${ payload.id }`, payload)
            .then(response => {
                return response.data;
            })
        return resp
    }
}