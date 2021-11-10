<template>
<div>
<cabecera></cabecera>
  <div class="row justify-content-center">
    <div class="col-md-6">
    <h2 class="text-center">Crear un nuevo Usuario</h2>
    
    
    <form @submit.prevent="crearusuario">

  <div class="mb-3">
    <label class="form-label">Nombre</label>
    <input type="text" class="form-control" v-model="usuario.name">
  </div>
  <div class="mb-3">
    <label class="form-label">Apellido</label>
    <input type="text" class="form-control" v-model="usuario.apellido">
  </div>

  <div class="mb-3">
    <label class="form-label">Email</label>
    <input type="email" class="form-control" v-model="usuario.email">
  </div>

  <div class="mb-3">
    <label class="form-label">Telefono</label>
    <input type="text" class="form-control" v-model="usuario.phone">
  </div>
  <div class="mb-3">
    <label class="form-label">Pais</label>
    <input type="text" class="form-control" v-model="usuario.pais">
  </div>
  <div class="mb-3">
    <label class="form-label">Ciudad</label>
    <input type="text" class="form-control" v-model="usuario.ciudad">
  </div>
  <div class="mb-3">
    <label class="form-label">Direccion</label>
    <input type="text" class="form-control" v-model="usuario.direccion">
  </div>
    <div class="mb-3">
    <label class="form-label">Clasificacion</label>
    <input type="text" class="form-control" v-model="usuario.clasificacion">
  </div>

  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control" v-model="usuario.password" required>
  </div>

  <div class="form-group">  
  <button class="btn btn-primary">Submit</button>
  </div>

</form>
    </div>
     <pie class="mt-4"></pie>
  </div>

  </div>
</template>

<script>
import axios from 'axios';
import cabecera from '@/components/cabecera.vue'
import pie from '@/components/pie.vue'
export default {
  components: { cabecera,pie },
  data(){
    return{
        usuario:{
          name:"",
          apellido:"",
          email:"",
          phone:"",
          pais:"",
          ciudad:"",
          direccion:"",
          clasificacion:"",
          password:"",

        }
    }
  },
  methods:{
    crearusuario(){
    
      let apiURL="http://localhost:3000/apiroutes/registrar"
      
      axios.post(apiURL,this.usuario)
      .then(()=>{
        this.$router.push("/");
        usuario={
          name:"",
          apellido:"",
          email:"",
          phone:"",
          pais:"",
          ciudad:"",
          direccion:"",
          clasificacion:"",
          password:"",

           };

        }) 
        .catch((error)=>{
          console.log(error)
       
        });
        }
       }
    }

</script>

