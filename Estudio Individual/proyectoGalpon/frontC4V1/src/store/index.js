import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error:''
  },
  mutations: {
    alerta(state,errorApi){
      state.error=errorApi;
    }
  },
  actions: {
    async login({commit}, usuario){
      try{
        const res=await fetch('http://localhost:3000/apiroutes/login',{
          method: 'POST',
          headers:{
            'Content-Type':'application/json' 
          },
          body: JSON.stringify(usuario)
        })
        const datosApi=await res.json()        
        commit('alerta',datosApi.error)
        console.log(datosApi)
        localStorage.setItem('token',datosApi.data.token)
        if(window.confirm("Gracias por iniciar sesion. Ya puede visitar todas las secciones"))
        router.push('/')
      }catch(error){
        console.log(error)
      }
    }
    // otra manera de hacer el cerrar
    // cerrar(){
    //   localStorage.removeItem('token');
    //   this.$router.push("/")
    // }
  },
  modules: {
  }
})
