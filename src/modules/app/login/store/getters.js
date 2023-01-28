const usuario = (state) => {
    return state.user.user;
}
const usuarioLogado = (state) => {
    return state.logado
}

const logando = (state) => {
    return state.logando;
}


export {
    usuario,
    usuarioLogado,
    logando
}