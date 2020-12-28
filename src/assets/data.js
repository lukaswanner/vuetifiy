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

function fill(json,size) {
    let data = []
    let cells = []
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            data[i] = json[i][j].value
        }
        cells[j] = data
        data = []
    }
    return cells[0].map((_, colIndex) => cells.map(row => row[colIndex]));
}

function fillKind(json,size) {
    let data = []
    let kind = []
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            data[i] = json[i][j].kind
        }
        kind[j] = data
        data = []
    }
    return kind[0].map((_, colIndex) => kind.map(row => row[colIndex]));
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
        fill(state,payload) {
            state.size = payload.size
            state.cells = fill(payload.json.gameField.grid.cells,state.size)
            state.kind = fillKind(payload.json.gameField.grid.cells,state.size)
        }
    }
})


export default store