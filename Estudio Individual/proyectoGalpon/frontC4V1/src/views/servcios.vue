<template>
  <div class="home">    
    <cabecera></cabecera>
    <hr class="bg-dark">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-7 columnaDetalles">
                <!--Titulo-->
                <h2 class="fw-bolder text-uppercase">Desarrollo de paginas web</h2>
                <!--Descripcion larga-->
                <p class="fs-5"> <!-- {{menu.p1}}  -->Nuestro equipo creativo posee gran experiencia en el desarrollo de páginas web de carga rápida, que se adaptan en teléfonos móviles, tablets y computadoras. Diseñamos y desarrollamos tu ágina web para que conecte con tus clientes potenciales. Nuestro equipo de diseño web trabaja con los mejores procesos y estándares de calidad.</p>
            </div>
            <div class="col-12 col-lg-4 columna2">
                <img class="img-fluid m-2"
                    src="https://disenodeweb.site/ddw/wp-content/uploads/2020/06/diseno-de-paginas-web.jpg" />
            </div>
        </div>
    </div>
    <hr>

    <div class="super-container precios">
        <br>
        <h2 class=" fw-bolder text-uppercase text-center">Precios</h2>
        <div class="row">
            <div class="col-12 col-lg-6 ">
                <div class="card m-4 bg-black ">
                    <h4 class="card-title text-uppercase text-center text-light">Emprendedor</h4>
                    <h5 class="card-subtitle mb-2 text-center text-light">Pagina de aterrizaje</h5>
                    <div class="card-body bg-light">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <h2 class="text-center text-bold text-primary">$850.000</h2>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 ">
                <div class="card m-4 bg-black">
                    <h4 class="card-title text-uppercase text-center text-light">Pimes</h4>
                    <h5 class="card-subtitle mb-2 text-center text-light">Pagina informativa</h5>
                    <div class="card-body bg-light">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <h2 class="text-center text-bold text-primary">$1.200.000</h2>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <hr>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-5 columnaFormulario border border-5">
                <br>
                <h3 class="text-black text-center text-uppercase fw-bold">Formulario de Contacto</h3>
                <hr class="bg-light">
                <div class="">
                    <h6 class="text-center ">Complete el siguiente formulario de contacto con tus datos y con gusto
                        recibirá asesoría y más información sobre nuestros servicios de páginas web</h6>
                    <form class="row">
                        <div class="col-6">
                            <label for="exampleFormControlInput1" class="form-label  fw-bolder">Nombre Completo</label>
                            <input type="text" class="form-control" id="nombrePersona"
                                placeholder="Juan Antonio Gonzales">
                        </div>
                        <div class="col-6">
                            <label for="exampleFormControlInput1" class="form-label  fw-bolder">Correo
                                Electronico</label>
                            <input type="email" class="form-control" id="correoPersona" placeholder="name@example.com">
                        </div>
                        <div class="col-12">
                            <label for="exampleFormControlInput1" class="form-label  fw-bolder">WhatsApp</label>
                            <input type="text" class="form-control" id="numeroPersona" placeholder="3223456789">
                        </div>
                        <div class="col-12">
                            <label for="exampleFormControlTextarea1" class="form-label  fw-bolder">Mensaje</label>
                            <textarea class="form-control" id="mensajeServicio" rows="3"></textarea>
                        </div>
                    </form>
                    <br>
                    <div class="d-grid gap-2">
                        <button class="btn btn-dark" type="button">Enviar</button>
                    </div>
                    <br>
                </div>

            </div>

            <div class="col-12 col-lg-6 text-end columnaForm">
                <!--Titulo-->
                <h2 class="fw-bolder text-uppercase">Desea contactarse</h2>
                <!--Descripcion larga-->
                <p class="fs-5"> Si lo que necesita es promocionar sus servicios, lo ideal es que tenga una Página Web,
                    de esta forma podrá a través de anuncios de GOOGLE llevar personas que estén buscando lo que usted
                    ofrece. ¿Cuándo empezamos a desarrollar tu página web?</p>
            </div>
        </div>
    </div>
    
    <pie></pie>
  </div>
</template>

<script>
import cabecera from '@/components/cabecera.vue';
import pie from '@/components/pie.vue';
import axios from 'axios';


export default {
    name: "servicios",
    components: { cabecera,pie },

    // datbaseURL: 'http://127.0.0.1:8080/',    
    //  data() {
    //    return {
    //     menu: null,
    //     };
    // },
    //  mounted() {
    // axios
    //   .get("../mock/data.json")
    //   .then((response) => {
    //     this.menu = response.data.servicios[0];
        
//        });
//   },



}
</script>