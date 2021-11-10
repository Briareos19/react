<template>
  <div class="home">    
    <cabecera></cabecera>
  <div class="container ">
            <main>
              <div  class="py-5 text-center" >
                <!-- <img class="d-block mx-auto mb-4" src="" alt="" width="72" height="57"> -->
                <h2 id="grey_texts">ACERCA DE AGROPECUARIA EL GALPON </h2>
              </div>
              <div class="row g-3">
                    <div class="col-md-5 col-lg-4 ">
                        <img src="../assets/logoB.jpg" alt="" width="300" height="400">
                    </div>
                    <!--NO PUDE INSERTAR IMAGEN<div clas="col">
                        <img src="assets/logoB.jpg" alt="" width="60" height="40">
                    </div>-->
                    <div class="col-md-5 col-lg-8">
                        <p id="grey_texts">
                            Venta de Insumos agropecuarios, Concentrados y Alimentos para animales, Pollitos de Engorde, Droga Veterinaria, Implementos Avicolas, Sales Mineralizadas, Vacunas, Miel de Purga, Accesorios Caninos, Semillas, Instrumental e Implementos Veterinarios.
                        </p>
                    </div>

                </div>
            </main>
        </div>
    
    <pie></pie>
  </div>
</template>

<script>
import cabecera from '@/components/cabecera.vue'
import pie from '@/components/pie.vue'
export default {
  components: { cabecera,pie },

}
</script>
<style>
.cont1{
    background-color:rgb(221, 218, 218);
}
.cont2{
    background-color:rgb(189, 189, 189);
}
.cont3{
    background-color:rgb(129, 129, 129);
}
.cont4{
    background-color:rgb(63, 63, 63);
}

.cont5{
    background-color:rgb(29, 28, 28);
}
</style>