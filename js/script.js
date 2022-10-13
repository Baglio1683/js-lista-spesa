const ulist = document.querySelector(".expense")

console.log(ulist)

const arrayExp = ["Banana", "Lattuga", "Pollo","Riso Basmati","Gelato","Nutella","Latte"]

let i = 0

while(i < arrayExp.length){

const piece = document.createElement("li")

piece.innerHTML = arrayExp[i]

ulist.appendChild(piece)

i++; 

}

