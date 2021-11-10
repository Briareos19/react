<template>
  <div class="home">
    <cabecera></cabecera>
    <carrusel></carrusel>
    <productos></productos>
    <pie></pie>    
  </div>
</template>

<script>
import productos from '@/components/productos.vue'
import cabecera from '@/components/cabecera.vue'
import pie from '@/components/pie.vue'
import carrusel from '@/components/carrusel.vue'



export default {
  components: { cabecera,pie,carrusel,productos },

}
</script>

    Productos
    Testimoniosarrusel>

<style>
/*Estilos Servicios*/

.imagenCarrusel{
    height: 400px;
    background-size: cover;
}
</style>
