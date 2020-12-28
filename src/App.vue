<template>
  <v-app>

    <navbar/>
    <v-main>
    <grid/>
    </v-main>
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue';
import grid from './components/grid.vue'


export default {
  name: 'App',

  components: {
    navbar,
    grid,
  },

  data: () => ({
    //
  }),
};
</script>
