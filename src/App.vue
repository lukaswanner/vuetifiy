<template>
  <v-app>

    <navbar/>
    <v-main>
    <homepage/>
    </v-main>
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue';
// import grid from './components/grid.vue'
import homepage from './components/homepage';



export default {
  name: 'App',

  components: {
    homepage,
    navbar,
  },

  data: () => ({
    //
  }),
};
</script>
