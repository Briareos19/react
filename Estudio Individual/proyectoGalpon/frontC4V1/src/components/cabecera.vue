<template>

<div>

  <nav class="gradiente navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <img class="logo-lgi navbar-brand" src="../assets/logoB.png" alt="Logo de El Galpón">
    <a class="ms-3 navbar-brand" href="#">EL GALPON</a>

    
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">INICIO</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/snosotros">SOBRE NOSOTROS</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACTO</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/registrar">REGISTRARSE</router-link>
        </li>
        <a class="ms-1 btn btn-sm btn-outline-secondary">
          <router-link class="btn btn-link bg-black" v-bind:to="envio">{{boton}}</router-link>
        </a>
        <a class="ms-1 btn btn-sm btn-outline-secondary" v-bind:style="salir">
          <button class="btn btn-link bg-black" @click="cerrarSesion">Salir</button>
        </a>
        
      </ul>
      
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

 </div>
</template>

<script>

// Importamos Axios 
import axios from 'axios';
import { mapActions } from 'vuex';

export default {  

  name: "cabecera", 

  data() {
    return {
      boton:'Entrar',
      envio:'login', 
      salir:'display:none'
    };
  },

  methods:{
    cerrarSesion(){
      localStorage.removeItem('token');
      this.$router.push("/login")
    }
  },

  mounted() {
    if (localStorage.token) {
      this.boton = 'Admin';
      this.salir = '';
      this.envio='/administrar';
    }
    else{
      this.boton='Entrar';
      this.envio='/login';
      this.salir='display:none';
    }
  },
    
};
</script>


<style>
.imagen {
    width: 100%;
    height: auto;
    background-color:white;
    
}

.ciento {
   
    width: 95%;
    height: 100%;
}

.menui{
    margin-left: 25%;
}

.gradiente {
    background-image: linear-gradient(green, yellow, orange);
}
.logo-lgi {
      width: 48px;
      height: 64px;
      display: block;
      margin-left: 10px;
      margin-right: auto;
  }

</style>

