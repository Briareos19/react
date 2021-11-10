<template>
<div>
  <cabecera></cabecera>
  <div class="home container">
   <h2 class="text-center super-container mt-3">ADMINISTRAR USUARIOS</h2>
    
    <table class="table">
  <thead class="bg--sucess">
    <tr>
      <th scope="col">Usuario</th>
      <th scope="col">Email</th>
      <th scope="col">Telefono</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="usuario in Usuarios" :key="usuario._id">
      <td> {{usuario.name}} </td>
      <td> {{usuario.email}} </td>
      <td> {{usuario.phone}} </td>
      <td>
        <router-link class="btn btn-success" :to="{name:'editar', params:{id: usuario._id}}">Editar</router-link>
        <button class="btn btn-danger" @click.prevent="eliminarusuario(usuario._id)">Eliminar</button>
      </td>

    </tr>
     <router-link class="btn btn-success" to="/">INICIO</router-link>
    </tbody>
</table>
  </div>
<pie></pie>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios'
import cabecera from '@/components/cabecera.vue'
import pie from '@/components/pie.vue'
export default {
  name: 'Administrar',
  components: { cabecera,pie },
  data(){
 
    return {
      Usuarios:[],
    }
  },

  created(){
    let apiURL="http://localhost:3000/apiroutes";
    axios.get(apiURL)
    .then((res)=>{
      this.Usuarios=res.data;
          })
    .catch((error)=>{
      console.log(error);
    });

  },

  methods:{
    eliminarusuario(id){
      let apiURL=`http://localhost:3000/apiroutes/eliminar/${id}`;
      let indexOfArrayItem=this.Usuarios.findIndex((i)=> i._id ===id);
      
      if(window.confirm("esta seguro?")){ 
        axios.delete(apiURL)
        .then(()=>{
          this.Usuarios.splice(indexOfArrayItem, 1);
        })
        .catch((error)=>{
          console.log(error);
        })
      }

    },
 },

}




</script>

