<template>
  <v-app>
    <navbar/>
    <v-container>
      <v-row>
        <v-col>
          <grid/>
          <hand/>
        </v-col>
        <v-col>
          <infopannel/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue';
import grid from './components/grid.vue'
import infopannel from "./components/infopannel";
import hand from "./components/hand";


export default {
  name: 'App',

  components: {
    navbar,
    grid,
    hand,
    infopannel,
  },

  data: () => ({
    //
  }),
};
</script>
