import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const estado = {
    token:null,
    usuario:{}
}

const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token, usuario }/*Object destruction*/){
        state.usuario = usuario;
        state.token = token;
    },
    DESLOGAR_USUARIO(state){
        state.token = null;
        state.usuario = {};
    }
}

export default new Vuex.Store({
    state:estado,
    mutations:mutations
});