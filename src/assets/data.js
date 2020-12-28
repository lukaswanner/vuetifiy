import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const point = {
    "=": 1,
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 3,
    "1": 1,
    "2": 1,
    "3": 2,
    "4": 2,
    "5": 3,
    "6": 2,
    "7": 4,
    "8": 2,
    "9": 2,
    "0": 1
}

function fill(json) {
    let data = []
    let cellKinds = []
    for (let j = 0; j < store.state.size; j++) {
        for (let i = 0; i < store.state.size; i++) {
            data[i] = json[i][j].value
            cellKinds[i] = json[i][j].kind
        }
        store.state.kind[j] = cellKinds
        store.state.cells[j] = data
        data = []
        cellKinds = []
    }
}


const store = new Vuex.Store({
    state: {
        cells: [],
        kind: [],
        size: 15,
        points: point
    },
    mutations: {
        setSize(state,size) {
            state.size = size
        },
        fill(state, json, size) {
            state.size = size
            fill(json)
        }
    }
})


export default store