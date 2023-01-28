import appApi from "@/plugins/axios"

const create = async ({ commit }, payload) => {
    const resp = await appApi.post('/wf/ctl-tasks', payload).then(response => {
        return response.data;
    })
    return resp
}

const update = async ({ commit }, payload) => {
    const resp = await appApi.put(`/wf/ctl-tasks/${ payload.id }`, payload).then(response => {
        return response;
    })
    return resp
}

const index = async ({ commit }, payload) => {
    const resp = await appApi.get(`/wf/ctl-tasks`).then(response => {
        console.log(response.data)
        commit('SET_LIST', response.data.data)
    })
    return resp
}

const _delete = async ({ commit }, payload) => {
    const resp = await appApi.delete(`/wf/ctl-tasks/${ payload.id }`).then(response => {
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