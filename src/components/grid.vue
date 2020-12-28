<template>

    <div class="myGrid">
        <v-container>
            <v-row>
                <div class="myCell myLabel"></div>
                <v-col v-for="(n,i) in size" :key="n" class="myCell myLabel">
                    {{ n }}
                    <div v-for="(m,index) in cells[i]" :key="m">
                        <div v-if="m !== ''" class="myCell myCard">
                            <div class="myCharacter"> {{m}}</div>
                            <div class="myPoint"> {{points[m]}}</div>
                        </div>

                        <div v-else-if="kind[i][index] ==='n'" class="myCell normal"
                             @click="addclick(mygrid,$event)"></div>
                        <div v-else-if="kind[i][index] ==='d'" class="myCell double" @click="addclick(mygrid,$event)">
                            x2
                        </div>
                        <div v-else-if="kind[i][index] ==='t'" class="myCell triple" @click="addclick(mygrid,$event)">
                            x3
                        </div>

                    </div>
                </v-col>
            </v-row>
            <v-row class="myRow" v-for="(n) in size" :key="n">
                <div class="myCell myLabel">
                    {{n}}
                </div>
                <v-col v-for="(n,i) in size" :key="n" class="myCell myLabel">
                    {{ n }}
                    <div v-for="(m,index) in cells[i]" :key="m">
                        <div v-if="m !== ''" class="myCell myCard">
                            <div class="myCharacter"> {{m}}</div>
                            <div class="myPoint"> {{points[m]}}</div>
                        </div>

                        <div v-else-if="kind[i][index] ==='n'" class="myCell normal"
                             @click="addclick(mygrid,$event)"></div>
                        <div v-else-if="kind[i][index] ==='d'" class="myCell double" @click="addclick(mygrid,$event)">
                            x2
                        </div>
                        <div v-else-if="kind[i][index] ==='t'" class="myCell triple" @click="addclick(mygrid,$event)">
                            x3
                        </div>

                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import store from '../assets/data.js'

    console.log(store.state)
    export default {
        name: "grid",

        data: function () {
            return {
                store: store,
                size: store.state.size,
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

<style>
    .myGrid {
        display: inline-flex;
        background: white;
        box-shadow: 0px 0px 10px 8px rgba(100, 100, 100, .2);
        border-radius: 1em;
        grid-gap: 0;
        padding: .5em;
        margin: 0px;
    }


    .myCell {
        display: flex;
        justify-content: center;
        align-items: center;

        min-width: 2.5em;
        min-height: 2.5em;
        border-radius: .3em;
        margin: .15em;

        max-height: 2em;
        max-width: 2em;

        background: #f0f0f0;
        box-shadow: inset 3px 3px 6px 4px rgba(100, 100, 100, 0.15);

        font-weight: bold;
    }

    .myLabel {
        border: none;
        background: #4d8080;
        color: white;
        box-shadow: none;
    }

</style>


