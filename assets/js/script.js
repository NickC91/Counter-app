// Funzioni per creare gli elementi in base alle caratteristiche richieste

//Potevo anche creare un'unica funziona con tutti i parametri 'function creaElementi( tagname, id, classe, testo, click), ma mi risultava troppo confusionaria.
//In questa maniera mi risulta più facile la gestione, ove dovessi integrare altre funzionalità
function elementClass(tagName, id, classe) {
    let element = document.createElement(tagName)
    element.id = id
    element.classList = classe
    return element
}

function elementText(tagName, id, testo) {
    let element = document.createElement(tagName)
    element.id = id
    element.innerHTML = testo
    return element
}

function elementClick(tagName, id, testo, click) {
    let element = document.createElement(tagName)
    element.id = id
    element.innerHTML = testo
    element.onclick = click
    return element
}

// Creo gli elementi tramite le funzioni con dei parametri specifici
const node = elementClass('div', 'node', 'container')
const firstNode = elementClass('div', 'firstNode', 'wrapper')
const secondNode = elementClass('div', 'secondNode', 'flex-container')
const text = [
    elementText('h1', 'testo', 'Contatore'),
    elementText('h2', 'valore', '0')
]
const button = [
    elementClick('span', 'piu', '+', () => { checkValue(+1) }),
    elementClick('span', 'resetta', 'RESET', () => { checkValue(0) }),
    elementClick('span', 'meno', '-', () => { checkValue(-1) })
]

//Funzione che posiziona gli elementi usando AppendChild (Genitore, Figlio)
function positionElement(elementoGenitore, elementoFiglio = [], id = false) {
    let elementoPrincipale
    if (id) {
        elementoPrincipale = document.getElementById(elementoGenitore.id)
    } else {
        //Questo 'else' è solo per la gestione iniziale con il 'body', il resto passa tutto dal primo if (dichiarato come true)
        elementoPrincipale = document.querySelector(elementoGenitore)
    }
    elementoFiglio.forEach(el => {
        elementoPrincipale.appendChild(el)
    });
}

//Posiziono gli elementi utilizzando la funzione sopra
positionElement('body', [node])

positionElement(node, [firstNode], true)
positionElement(firstNode, text, true)

positionElement(node, [secondNode], true)
positionElement(secondNode, button, true)

//Funzione per la gestione del Counter
function checkValue(numero) {
    let change = document.getElementById('valore')
    let risultato = parseInt(change.innerHTML)
    if (numero == 0) return change.innerHTML = 0
    risultato += numero
    return change.innerHTML = risultato
}