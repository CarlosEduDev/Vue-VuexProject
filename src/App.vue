<template>
  <div id="app">
      <barra-navegacao/>
    <router-View/>
  </div>
</template>

<script>
  import BarraNavegacao from '@/components/BarraNavegacao'
    export default {
      components:{
       'barra-navegacao':BarraNavegacao
      }
    }
</script>


