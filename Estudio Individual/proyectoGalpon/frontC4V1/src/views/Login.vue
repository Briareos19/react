<template>
<div>
<div class="row justify-content-center ciento d-flex">
<cabecera></cabecera>

 <div class="container-lg">

     <header class="head-lg">
                <div class="title-bar">
                    <router-link class="btn-home" to="/">X</router-link><!--botón de cerrar el formulario-->
                </div>
                <img class="logo-lg" src="../assets/logoB.png" alt="Logo de El Galpón"/><!--logotipo de la empresa-->
                <h1>Ingresa a tu cuenta</h1>
                <!--Radio buttons-->
                <input type="radio" id="rbtnadmin" name="tipoAcceso" value="admin">
                <label class="etqradiobtn" for="rbtnadmin">Como Admin</label>
                <input type="radio" id="rbtnuser" name="tipoAcceso" value="user" checked>
                <label class="etqradiobtn" for="rbtnuser">Como Usuario</label>
            </header>





 <form class="row justify-content-center" @submit.prevent="login(usuario)">

  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Email</label>
    <input type="email" class="form-control" id="validationCustom01" v-model="usuario.email" required>
    
  </div>
  
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Password</label>
    <input type="password" class="form-control" id="validationCustom02" v-model="usuario.password" required>
   </div>

    

    <div class="justify-content-center d-flex">
        <button class="btn btn-danger">Login</button>
    </div>


   

</form>
<div class="treinta"></div>
<div role="alert">
    {{error}}
    </div>
    


</div>
 </div>
 <pie></pie>
 </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import cabecera from '@/components/cabecera.vue'
import pie from '@/components/pie.vue'


export default {
    components: { cabecera,pie },
    data(){
        return {
             usuario:{
                email:'',
                password:''
            },
            alerta:''
        }
    },
    methods:{
        ...mapActions(['login'])
    },
    computed:{
        ...mapState(['error'])
    }

}
</script>

<style>

 * {
      box-sizing: border-box;
  }
  body {
      margin: 0;
  }
  .container-lg {
      margin: 3rem auto;
      max-width: 30rem;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      background-image: linear-gradient(green, yellow, orange);
      text-align: center;
 }
  .btn-home {
      width: 16px;
      height: 16px;
      float: right;
  }
  .logo-lg {
      width: 48px;
      height: 64px;
      display: block;
      margin-left: auto;
      margin-right: auto;
  }
  .iconlog {
      margin-left: 10px;
      margin-top: 0px;
      margin-right: 10px;
      margin-bottom: 0px;
      padding:0;
      margin-left: 10px;
      margin-top: 0px;
      margin-right: 10px;
      margin-bottom: 0px;
      padding:0;

      width: 16px;
      height: 16px;
  }
  .contenedorBoton {
      display:block;
      margin-top: 10px;
  }
  .contenedorBoton > button {
      width:80%;
      display: inline-flexbox;
      margin-left: 3rem;
      margin-right: auto;
      margin-bottom: 0px;
      margin-top: 0px;
 }
 .btn.btn-link {
     text-align:right;
     margin: 0;
 }
 .etqRegistro{
     font-weight: 400;
     color: #007bff;
     text-align: right;
 }
  .writeuser {
      position: block;
      left: 45%;
      margin-bottom: 10px;
  }
  .lbllogin {
      margin: auto;
      width: 152.12px;
      font-size: small;
      font-weight: bold;
      text-align: right;
      display: inline-block;
  }
  .etqradiobtn {
      margin-right: 25px;
      margin-left: 5px;
  }

.treinta{
    width: 100%;
    height: 20px;
    background-color: gray;
}
.ciento{
    width:100%
}


</style>