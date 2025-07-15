let diceeOne = Math.floor(Math.random() * 6) + 1 // .random returns a real number in the interval (0,1). Setting a floor makes it return just integers
let diceeTwo = Math.floor(Math.random() * 6) + 1

let imgDiceeOne = document.querySelector(".img1")
let imgDiceeTwo = document.querySelector(".img2")

const resultField = document.getElementsByTagName("h1")[0]
let gameResult = document.createElement("h2")

if(diceeOne > diceeTwo){
    gameResult.textContent = "Player 1 wins!"
    resultField.insertAdjacentElement("afterend", gameResult)
}else if (diceeTwo > diceeOne){
    gameResult.textContent = "Player 2 wins!"
    resultField.insertAdjacentElement("afterend", gameResult)
}else{
    gameResult.textContent = "It's a tie!"
    resultField.insertAdjacentElement("afterend", gameResult)
}

imgDiceeOne.setAttribute("src", `images/dice${diceeOne}.png`)
imgDiceeTwo.setAttribute("src", `images/dice${diceeTwo}.png`)
