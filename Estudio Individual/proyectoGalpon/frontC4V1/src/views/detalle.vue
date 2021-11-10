<template>
<div>
    <cabecera></cabecera>

    <div class="container ">
        <main>
            <div class="row g-2">
                <div class="col-md-9">
                    <h2 class="cabecera">{{producto.nombre}}</h2>
                    <p id="precio" class="cabecera">$ {{producto.precio_venta}}</p>
                </div>
            </div>
          <div class="row g-3">
                <div class="col-md-4 order-md-last">
                    <p id="grey_texts">{{producto.detalle}}</p>
                </div>
                <div class="col-md-3 col-lg-3">
                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                        Categorías
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">Insumos avícolas</a>
                    <a href="#" class="list-group-item list-group-item-action">Medicina Veterinaria</a>
                    <a href="#" class="list-group-item list-group-item-action">Concentrados</a>
                    <a class="list-group-item list-group-item-action disabled">Atención Veterinaria</a>
                </div>
                <div class="col-md-5 col-lg-3">
                    <img v-bind:src="producto.imagen" alt="" width="230" height="340">
                    <button class="btn btn-primary" id="addToCar" v-on:click="addToCart">Agregar al carrito</button>
                </div>
          </div>
          <br>
          <br>
          <br>
          
        </main>
    </div>

    <pie></pie>
</div>


</template>


<script>
import axios from "axios";
import cabecera from '@/components/cabecera.vue'
import pie from '@/components/pie.vue'
export default {
    components: {cabecera,pie},
  data() {
    return {
      producto: {},
    };
  },
  created() {
    let apiURL = `http://localhost:3000/api/search-product/${this.$route.params.id}`;
    axios.get(apiURL).then((res) => {
      this.producto = res.data;
    });
  },
  methods: {
      addToCart(){
          alert("Componente en edición");
      }
  }
};
</script>

<style>
    .cabecera {
        display: block;
        text-align: center;
        font-weight: bold;
    }

    #precio {
        border: 1px solid silver;
    }

    #addToCar {
        margin: 15px;
        width: 100%
    }
</style>
