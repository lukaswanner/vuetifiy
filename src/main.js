import Vue from 'vue'
import App from './App.vue'
import vuetify from '../plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

/*let websocket = new WebSocket("ws://localhost:9000/websocket");
websocket.setTimeout

websocket.onopen = function () {
  console.log("Connected to Websocket");
}

websocket.onclose = function (code) {
  console.log(code)
  console.log('Connection with Websocket Closed!');
};

websocket.onerror = function (error) {
  console.log('Error in Websocket Occured: ' + error);
};*/
