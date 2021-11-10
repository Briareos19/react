<template>
  <div class="home">    
    <cabecera></cabecera>

    
    <section id="news" class="noticiascont">
      <h2 class="text-center bg-secondary fw-bold super-container text-white">NOTICIAS SOBRE DESARROLLO WEB</h2>
      <div class="container">
        <div class="row">
          <div class="col-6 col-lg-3 p-2 ">
            <div class="card text-end shadow">
              <img src="https://www.latevaweb.com/diseno-web/tendencias-disenno-2021-4.jpg" class="card-img-top"
                alt="...">
              <div class="card-body">
                <h5 class="card-title fw-bolder">TENDENCIAS DE DISEÑO WEB PARA 2021</h5>
                <hr>
                <p class="card-text">¿Quieres descubrir cuáles seran las nuevas tendencias de este 2021? ¡No te dejes
                  niguna por conocer!</p>
                <a href="https://www.latevaweb.com/tendencias-disenno-2021" class="btn btn-primary">Ver más...</a>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3 p-2">
            <div class="card text-end shadow">
              <img src="https://www.latevaweb.com/diseno-web/contratar-mantenimiento-web.jpg" class="card-img-top"
                alt="...">
              <div class="card-body">
                <h5 class="card-title fw-bolder">¿POR QUÉ CONTRATAR EL MANTENIMIENTO DE TU WEB?</h5>
                <hr>
                <p class="card-text">¿Estás pensando en contratar el mantenimiento de tu web? Te explicamos por qué es
                  una buena elección para ti y los aspectos que debes tener en cuenta.</p>
                <a href="https://www.latevaweb.com/contratar-mantenimiento-web" class="btn btn-primary">Ver más...</a>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3 p-2">
            <div class="card text-end shadow">
              <img src="https://www.latevaweb.com/diseno-web/diseno-web-ecommerce.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title fw-bolder">LOS 5 REQUISITOS DE UN BUEN DISEÑO WEB PARA ECOMMERCE</h5>
                <hr>
                <p class="card-text">El diseño web es el elemento protagonista de cualquier ecommerce, puesto que es
                  necesario disponer de una página web que cumpla con todos los elementos importantes para convertir una
                  tienda online en un espacio ideal para navegar y comprar por internet. Este artículo explica los 5
                  requisitos para crear un diseño.</p>
                <a href="https://www.latevaweb.com/diseno-web-ecommerce" class="btn btn-primary">Ver más...</a>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3 p-2">
            <div class="card text-end shadow">
              <img src="https://www.latevaweb.com/diseno-web/entrevista-disenadora-web.png" class="card-img-top"
                alt="...">
              <div class="card-body">
                <h5 class="card-title fw-bolder">ENTREVISTA A CELESTE, DISEÑADORA DE PÁGINAS WEB</h5>
                <hr>
                <p class="card-text">El diseño de las páginas web responde a la parte funcional, la estética y el
                  contexto en dónde nos encontremos, por eso, se ha de ir actualizando los elementos gráficos con el fin
                  de comunicar una idea. Descubre todo lo que engloba el diseño de las páginas web con la entrevista a
                  la diseñadora web Celeste.</p>
                <a href="https://www.latevaweb.com/entrevista-disenadora-paginas-webs" class="btn btn-primary">Ver
                  más...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    
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