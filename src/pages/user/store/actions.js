import appApi from "@/plugins/axios"

const create = async ({ commit }, payload) => {
    const resp = await appApi.post('/users', payload).then(response => {
        return response.data;
    })
    return resp
}

const update = async ({ commit }, payload) => {
    const resp = await appApi.put(`/users/${ payload.id }`, payload).then(response => {
        return response.data;
    })
    return resp
}

const index = async ({ commit }, payload) => {
    const resp = await appApi.get(`/users`).then(response => {
        commit('SET_LIST', response.data)
    })
    return resp
}

const _delete = async ({ commit }, payload) => {
    const resp = await appApi.delete(`/users/${ payload.id }`).then(response => {
        return response.data
    })
    return resp
}

export {
    index,
    create,
    update,
    _delete,
}