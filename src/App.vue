<template>
  <v-app>
    <navbar/>
    <v-container>
      <v-row>
        <v-col>
          <grid/>
        </v-col>
      </v-row>
    </v-container>
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
