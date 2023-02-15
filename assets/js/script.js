//Creazione elementi
const node = document.createElement("div")

const firstNode = document.createElement("div")
const h1 = document.createElement("h1")
const h2 = document.createElement("h2")

const secondNode = document.createElement("div")
const plus = document.createElement("span")
const reset = document.createElement("span")
const minus = document.createElement("span")

//Associazione
node.classList = "container"

firstNode.classList = "wrapper"
h1.textContent = "CONTATORE"
h2.id = "valore"
h2.textContent = '0'

secondNode.classList = "flex-container"
plus.id = "piu"
plus.textContent = "+"

minus.id = "meno"
minus.textContent = "-"

reset.id = "resetta"
reset.textContent = "RESET"

//Gestione DOM
document.body.appendChild(node)

node.appendChild(firstNode)
firstNode.appendChild(h1)
firstNode.appendChild(h2)

node.appendChild(secondNode)
secondNode.appendChild(plus)
secondNode.appendChild(reset)
secondNode.appendChild(minus)

//Start iniziale
let value = 0

// Cambio valore
function changeValue() {
    return valore.textContent = value
}

//Logica incremento
piu.addEventListener('click', () => {
    value = value + 1
    changeValue()
})

//Logica riduzione
meno.addEventListener('click', () => {
    value = value - 1
    changeValue()
})

//Logica reset
resetta.addEventListener('click', () => {
    value = 0
    changeValue()
})
