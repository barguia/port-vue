const SALVAR_USUARIO_STATE = (state, payload) => {
  state.user = payload
  state.logado = true
  sessionStorage.setItem('user', JSON.stringify(payload))
}

const ATUALIZA_USUARIO_STATE = (state, payload) => {
  state.user.name = payload.name
  state.user.email = payload.email
}

const LOGANDO = (state, payload) => {
  state.logando = payload
}

const DELETAR_USUARIO_STATE = (state) => {
  state.user = {}
  state.logado = false
  sessionStorage.removeItem('user')
}

export {
  SALVAR_USUARIO_STATE,
  ATUALIZA_USUARIO_STATE,
  DELETAR_USUARIO_STATE,
  LOGANDO
}