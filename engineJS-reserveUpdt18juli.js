import { default as Suitclass } from "./oop-suit.js";


// const Suit = require("./oop-suit");

// input (gunting, kertas, batu);

const suitan = new Suitclass();


const batuP1 = document.getElementById("batu-player1");
const guntingP1 = document.getElementById("gunting-player1");
const kertasP1 = document.getElementById("kertas-player1");
const refreshButton = document.getElementById("refresh-game");
const getBoardResult = document.getElementById("board-result")

let addSpan = document.createElement("span");
let getSpanBoard = document.getElementById("board-result");
// console.log(getSpanBoard.childNodes[0]);


function replaceSpanElm() {
    if (addSpan.innerText && getSpanBoard.childNodes[0]) {
        getSpanBoard.removeChild(getSpanBoard.childNodes[0]);
        addSpan.innerText = "";
    } else if (addSpan.innerText) {
        addSpan.innerText = "";
    } else {
        getSpanBoard.removeChild(getSpanBoard.childNodes[0]);
    }
}

function p1_Win() {
    // if addSpan.textContent has String inside it, it will reassign with ""
    replaceSpanElm()


    getBoardResult.classList.remove("vs-frame", "draw_result");
    getBoardResult.classList.add("not_draw_result", "text_result");


    const text = document.createTextNode("PLAYER 1 WIN");
    addSpan.appendChild(text);

    getBoardResult.appendChild(addSpan);
    getBoardResult.style.wordSpacing = "";
}

function com_Win() {
    // if addSpan.textContent has String inside it, it will reassign with ""

    replaceSpanElm()


    getBoardResult.classList.remove("vs-frame", "draw_result");
    getBoardResult.classList.add("not_draw_result", "text_result");

    const text = document.createTextNode("COM WIN");
    addSpan.appendChild(text);
    getBoardResult.appendChild(addSpan);
    getBoardResult.style.wordSpacing = "100vw";
}

function draw_Condition() {
    replaceSpanElm()

    getBoardResult.classList.remove("vs-frame");
    getBoardResult.classList.add("draw_result", "text_result");

    const text = document.createTextNode("DRAW");
    addSpan.appendChild(text);
    getBoardResult.appendChild(addSpan);
}


const getBatu = document.getElementById("batu-com");
const getGunting = document.getElementById("gunting-com")
const getKertas = document.getElementById("kertas-com")


// if click batu picture
batuP1.addEventListener("click", () => {
    let inputan = suitan.suit("batu");

    console.log(inputan);
    if (inputan === "seri") {
        // DRAW
        draw_Condition()

        getBatu.classList.remove("set-bg-grey");
        getBatu.classList.add("set-bg-grey");
        setTimeout(() => {
            getBatu.classList.remove("set-bg-grey");
        }, 1000);
    }
    else if (inputan === "menang") {

        // P1 WIN
        p1_Win()

        getGunting.classList.remove("set-bg-grey");
        getGunting.classList.add("set-bg-grey");
        setTimeout(() => {
            getGunting.classList.remove("set-bg-grey");
        }, 1000);
    }
    else if (inputan === "kalah") {
        // COM WIN
        com_Win()
        getKertas.classList.remove("set-bg-grey");
        getKertas.classList.add("set-bg-grey");
        setTimeout(() => {
            getKertas.classList.remove("set-bg-grey");
        }, 1000);
    }
});




// if click gunting picture
guntingP1.addEventListener("click", () => {
    let inputan = suitan.suit("gunting");
    console.log(inputan);

    if (inputan === "seri") {
        draw_Condition()
        getGunting.classList.remove("set-bg-grey");
        getGunting.classList.add("set-bg-grey");
        setTimeout(() => {
            getGunting.classList.remove("set-bg-grey");
        }, 1000);
    }
    else if (inputan === "kalah") {
        com_Win()
        getBatu.classList.remove("set-bg-grey");
        getBatu.classList.add("set-bg-grey");
        setTimeout(() => {
            getBatu.classList.remove("set-bg-grey");
        }, 1000);
    }

    else if (inputan === "menang") {
        // P1 WIN
        p1_Win();

        getKertas.classList.remove("set-bg-grey");
        getKertas.classList.add("set-bg-grey");
        setTimeout(() => {
            getKertas.classList.remove("set-bg-grey");
        }, 1000);
    }
});




// if click kertas picture
kertasP1.addEventListener("click", () => {
    let inputan = suitan.suit("kertas");
    console.log(inputan);

    if (inputan === "seri") {
        draw_Condition();
        getKertas.classList.remove("set-bg-grey");
        getKertas.classList.add("set-bg-grey");
        setTimeout(() => {
            getKertas.classList.remove("set-bg-grey");
        }, 1000);
    }

    else if (inputan === "kalah") {
        com_Win()
        getGunting.classList.remove("set-bg-grey");
        getGunting.classList.add("set-bg-grey");
        setTimeout(() => {
            getGunting.classList.remove("set-bg-grey");
        }, 1000);
    }
    else if (inputan === "menang") {
        // P1 WIN
        p1_Win()

        getBatu.classList.remove("set-bg-grey");
        getBatu.classList.add("set-bg-grey");
        setTimeout(() => {
            getBatu.classList.remove("set-bg-grey");
        }, 1000);
    }

});



// click refresh button
refreshButton.addEventListener("click", () => {

    replaceSpanElm()

    getBoardResult.classList.remove("not_draw_result", "draw_result", "text_result");
    getBoardResult.classList.add("vs-frame");

    const textVs = document.createTextNode("vs");
    addSpan.appendChild(textVs);
    getBoardResult.appendChild(addSpan);
});
