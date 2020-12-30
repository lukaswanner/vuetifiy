<template>
    <v-app>

        <navbar/>
        <button v-on:click="sendMessage('hello')">Send Message</button>
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
        created: function () {
            console.log("Starting connection to WebSocket Server")
            this.connection = new WebSocket("wss://echo.websocket.org")

            this.connection.onmessage = function (event) {
                console.log(event);
            }

            this.connection.onopen = function (event) {
                console.log(event)
                console.log("Successfully connected to the echo websocket server...")
            }
        },

        methods: {
            sendMessage: function (message) {
                console.log(this.connection);
                this.connection.send(message);
            }
        },

        data: () => ({
            //
        }),
    };
</script>
