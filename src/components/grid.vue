<template>
    <div>
        <div class="myGrid">
            <v-row class="myRow" v-for="(n) in this.size" :key="n">
                <div class="myCell myLabel">
                    test {{ n }}
                </div>
            </v-row>
        </div>
    </div>
</template>

<script>
    import store from '../assets/data.js'

    export default {
        name: "grid",

        data: function () {
            return {
                store: store,
                size: 10,
                cells: store.state.cells,
                kind: store.state.kind,
                points: store.state.points,
            }
        },
        methods: {
            // addclick: function(grid, event) {
            //     if (!event.target.classList.contains("activeDiv")) {
            //         return recolor(event.target, $(".myCell"))
            //     } else {
            //         return setCard(grid)
            //     }
            // }
        }
    }
</script>

<css>

</css>


