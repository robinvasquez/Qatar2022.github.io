<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="container navbar-nav">
        <button v-on:click="verMenuPrincipal">Inicio</button>
        <button v-on:click="verClasificados">Clasificados</button>
        <button v-on:click="verEstadios">Estadios</button>
        <button v-on:click="verGrupos">Grupos</button>
        <button v-on:click="verPartidos">Informacion de partidos</button>
      </div>
    </div>
  </nav>

<img src="./assets/HEADER.png" class="inf-img img-fluid" alt="img">
  <!-- <img src="./assets/QATAR-1.png" alt="image" class="info-img-1 img-fluid"/> -->
  <PrincipalMenu v-show="muestraPrincipalMenu"/>
  <ClasificadosMundial v-show="muestraClasificados"></ClasificadosMundial>
  <EstadiosMundial v-show="muestraEstadios"></EstadiosMundial>
  <FormacionGrupos v-show="muestraGrupos"></FormacionGrupos>
  <InformacionPartidos v-show="muestraPartidos"></InformacionPartidos>
  <img src="./assets/INTEGRANTES.png" alt="image" class="info-img-1 img-fluid"/>
</template>

<script>
import PrincipalMenu from './components/PrincipalMenu.vue'
import ClasificadosMundial from './views/ClasificadosMundial/ClasificadosMundial.vue';
import EstadiosMundial from './views/EstadiosMundial/EstadiosMundial.vue';
import FormacionGrupos from './views/FormacionGrupos/FormacionGrupos.vue';
import InformacionPartidos from './views/InformacionPartidos/InformacionPartidos.vue';

export default {
  name: 'App',
  components: {
    PrincipalMenu,
    ClasificadosMundial,
    EstadiosMundial,
    FormacionGrupos,
    InformacionPartidos
},

data:()=>({
  muestraPrincipalMenu:true,
  muestraClasificados:false,
  muestraEstadios:false,
  muestraGrupos:false,
  muestraPartidos:false,
}),

 methods: {
 computed: {},
 verMenuPrincipal: function () {
      if (this.muestraPrincipalMenu===true) {
        this.muestraPrincipalMenu=false;
       } else {
        this.muestraPrincipalMenu=true;
        this.muestraClasificados=false;
        this.muestraEstadios=false;
        this.muestraGrupos=false;
        this.muestraPartidos=false;
      }
    },

   verClasificados: function () {
      if (this.muestraClasificados===true) {
        this.muestraClasificados=false;
       } else {
        this.muestraClasificados=true;
        this.muestraPrincipalMenu=false;
        this.muestraEstadios=false;
        this.muestraGrupos=false;
        this.muestraPartidos=false;
        this.muestraPrincipalMenu=false;
      }
    },

    verEstadios: function () {
      if (this.muestraEstadios===true) {
        this.muestraEstadios=false;
       } else {
        this.muestraEstadios=true;
        this.muestraPrincipalMenu=false;
        this.muestraClasificados=false;
        this.muestraGrupos=false;
        this.muestraPartidos=false;
      }
    },

     verGrupos: function () {
      if (this.muestraGrupos===true) {
        this.muestraGrupos=false;
       } else {
        this.muestraGrupos=true;
        this.muestraPrincipalMenu=false;
        this.muestraClasificados=false;
        this.muestraEstadios=false;
        this.muestraPartidos=false;
      }
    },

    verPartidos: function () {
      if (this.muestraPartidos===true) {
        this.muestraPartidos=false;
       } else {
        this.muestraPartidos=true;
        this.muestraPrincipalMenu=false;
        this.muestraClasificados=false;
        this.muestraEstadios=false;
        this.muestraGrupos=false;
      }
    },
 }
}
</script>

<style>
.inf-img{
  width: 100%;
  height: 400px;
}
button{
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  background:linear-gradient(30deg,   #232323  ,   #232323 ,   #232323 ,  #232323,   #232323  );
  border: none;
  outline: #232323;
}
.navbar-nav{
  justify-content: center;
}
</style>
