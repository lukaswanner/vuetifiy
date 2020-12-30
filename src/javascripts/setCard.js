import store from '../assets/data.js'

global.jQuery = require('jquery');

let $ = global.jQuery;
window.$ = $;



function setCard() {
    const current_player = store.state.currentPlayer
    if (current_player === "A"){
        setCardcurrPlayer()
    } else if (current_player === "B") {
        setCardcurrPlayer()
    }


}

function setCardcurrPlayer() {
    let active = isActive($(".inHand"))
    if (active[0]) {
        for (let i = 0; i < $(".myRow").length; i++) {
            let row = $(".myRow").get(i)
            let cells = row.getElementsByClassName("myCell")
            let activerow = isActive(cells)
            if (activerow[0]) {
                let activeCard = active[1]
                let url = "http://localhost:9000/scrabble/set/" + i + "/" + (activerow[1] - 1) + "/" + activeCard
                console.log(url)
                $.ajax({
                    method: "GET",
                    url: url,
                    success: function () {
                        console.log("card set!")
                    }
                });

            }
        }
    }
}


function isActive(array) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (element.classList.contains("active")) {
            return [true, i]
        }
    }
    return false

}

export default setCard