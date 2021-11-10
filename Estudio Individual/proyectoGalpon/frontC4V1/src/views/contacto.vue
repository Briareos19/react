<template>
  <div class="home">    
    <cabecera></cabecera>

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