<template>

    <div class="myGrid">
        <v-container fill-height fluid>
            <v-row align="center" justify="center">
                <div class="myCell myLabel"></div>
                <v-col v-for="(col) in size" :key="col" class="myCell myLabel">
                    {{ col }}
                </v-col>
            </v-row>
            <v-row class="myRow" v-for="(row,i) in size" :key="row" align="center" justify="center">
                <div class="myCell myLabel">
                    {{row}}
                </div>
                <v-col class="myCell" v-for="(m,index) in cells[i]" :key="m + index">
                    <div v-if="m !== ''" class="myCell myCard" @click.self="addclick(cells,$event)">
                        <div class="myCharacter"> {{m}}</div>
                        <div class="myPoint"> {{points[m]}}</div>
                    </div>

                    <div v-else-if="kind[i][index] ==='n'" class="myCell normal" @click.self="addclick(cells,$event)"></div>
                    <div v-else-if="kind[i][index] ==='d'" class="myCell double" @click.self="addclick(cells,$event)">
                        x2
                    </div>
                    <div v-else-if="kind[i][index] ==='t'" class="myCell triple" @click.self="addclick(cells,$event)">
                        x3
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <hand/>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import store from '../assets/data.js'
    import hand from '../components/hand.vue'

    global.jQuery = require('jquery');

    let $ = global.jQuery;
    window.$ = $;

    function loadjson() {
        return new Promise(function (resolve, reject) {
            $.ajax({
                method: "GET",
                async: false,
                url: "http://localhost:9000/json",
                dataType: "json",
                success: function (result) {
                    store.commit("fill", {json: result, size: 15});
                    resolve(result)
                },
                error: function (result) {
                    reject(result)
                }
            })
        })
    }

    loadjson()

    export default {
        name: "grid",


        components: {
            hand,
        },
        data: function () {
            return {
                store: store,
                points: store.state.points,
            }
        },
        computed: {
            cells() {
                return store.state.cells
            },
            kind() {
                return store.state.kind
            },
            size() {
                return store.state.size
            },
        },
        methods: {
            addclick: function (grid, event) {
                if (!event.target.classList.contains("active")) {
                    $(".myCell").removeClass("active")
                    event.target.classList.add("active")
                } else {
                    //w8 for response
                    loadjson().then(function getHand(response) {
                        console.log(response)
                        let hand = response.gameField.playerList.A.hand
                        console.log(hand[0].value)
                        //zeile spalte index von der hand
                        let url = "http://localhost:9000/scrabble/set/" + 7 + "/" + 9 + "/" + 4
                        console.log(url)
                        $.ajax({
                            method: "GET",
                            url: url,
                            success: function () {
                                console.log("done")
                            }
                        })
                    })
                }
            }
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

    .myCard {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        min-width: 2.5em;
        min-height: 2.5em;
        border-radius: .5em;
        margin: .2em;

        background-image: url("../assets/card.png");
        background-size: cover;
        /*background: #d29d7a;*/
        box-shadow: 3px 3px 5px 2px rgba(100, 100, 100, 0.15);
        font-weight: bold;
    }

    .myCharacter {
        font-size: 1.2em;
    }

    .myPoint {
        position: absolute;
        right: .2em;
        bottom: .08em;
        font-size: .7em;
    }

    .double {
        background-color: #ffe252;
    }

    .triple {
        background-color: #f85c5c;
    }

    .active {
        border: 1px solid black;
    }

</style>


