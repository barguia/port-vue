import appApi from "@/plugins/axios"
import router from "@/router/router"
const logarUsuario = async ({ commit }, payload) => {
    commit('LOGANDO', true);

    const resp = await appApi.post('/login', payload).then(response => {
        let token = response.data.access_token;

        if (!token) {
            return
        }

        commit('SALVAR_USUARIO_STATE', response.data);
        return response;
    })
    .finally(() => {
        commit('LOGANDO', false);
    });

    return resp
}

const deslogarUsuario = async ({ commit }, payload) => {
    commit('DELETAR_USUARIO_STATE');
    commit('LOGANDO', false);

    // const resp = await appApi.post('/logout', payload).then(response => {
    //     localStorage.removeItem('sgp-usuario')
    //     removerCookie(nomeCookie)
    //
    //     router.push('/login');
    //     return response
    // }).finally(() => {
    //
    // });
    //
    // return resp
}



export {
    logarUsuario,
    // usuarioEstaLogado,
    deslogarUsuario
}