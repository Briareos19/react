<template>
<div>
  <cabecera></cabecera>
 <div class="row justify-content-center">
    <div class="col-md-6">
    <h2 class="text-center">Editar Usuario de elGalpon</h2>
    
    
    <form @submit.prevent="editarusuario">

  <div class="mb-3">
    <label class="form-label">Nombre</label>
    <input type="text" class="form-control" v-model="usuario.name">
  </div>

  <div class="mb-3">
    <label class="form-label">Telefono</label>
    <input type="text" class="form-control" v-model="usuario.phone">
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
  </div>
  <pie></pie>
   </div>
</template>

<script>
import axios from 'axios';
import cabecera from '@/components/cabecera.vue';
import pie from '@/components/pie.vue';
export default {
    name:'editar',
    components: { cabecera,pie },
    data(){
    return {
      usuario:{}
    }
  },
  created(){
    let apiURL=`http://localhost:3000/apiroutes/editar/${this.$route.params.id} `;
   
    axios.get(apiURL)
    .then((res)=>{
      this.usuario=res.data;
    })
    .catch((error)=>{
      console.log(error);
    });

  },
  methods:{
      editarusuario(){
          let apiURL=`http://localhost:3000/apiroutes/actualizar/${this.$route.params.id} `;
           
    axios.put(apiURL, this.usuario)
    .then((res)=>{
      this.$router.push("/administrar");
    })
    .catch((error)=>{
      console.log(error);
    });
      }
  }


}
</script>
