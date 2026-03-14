/* CONTADOR DE COMPRAS */

let compras = document.getElementById("compras")

setInterval(()=>{

let atual = parseInt(compras.innerText)

let aumento = Math.floor(Math.random()*3)

compras.innerText = atual + aumento

},5000)



/* INFOBOX ACESSOS */

const nomes = [

"João Paulo",
"Lucas Silva",
"Pedro Henrique",
"Gabriel Costa",
"Matheus Souza",
"Rafael Santos",
"Bruno Oliveira",
"Felipe Rocha",
"Daniel Alves",
"Thiago Martins",
"André Luiz",
"Rodrigo Santos",
"Carlos Eduardo",
"Gustavo Henrique",
"Vinicius Pereira",
"Diego Carvalho",
"Renato Lima",
"Fernando Rodrigues",
"Leonardo Gomes",
"Ricardo Batista",
"Marcelo Ferreira",
"Eduardo Teixeira",
"Paulo Henrique",
"Victor Hugo",
"Caio Vinicius",
"Igor Andrade",
"Samuel Ribeiro",
"Patrick Santos",
"Bruno Henrique",
"Alexandre Moraes",
"Juliano Costa",
"Douglas Pereira",
"Cristiano Rocha",
"Fábio Almeida",
"Henrique Batista",
"Danilo Freitas",
"Leandro Moreira",
"Ruan Silva",
"Jean Carlos",
"Alan Rodrigues",
"Jonathan Martins",
"William Pereira",
"Luiz Fernando",
"Roberto Alves",
"Cláudio Santos",
"Diego Nunes",
"Márcio Gomes",
"Rafael Pereira",
"Brayan Costa",
"Tiago Lopes"

]

const mensagens = [

"acabou de acessar o site",
"está vendo o guia ESA",
"entrou na página agora",
"está analisando o conteúdo"

]

const infobox = document.getElementById("infobox")

function mostrarInfobox(){

const nome = nomes[Math.floor(Math.random()*nomes.length)]

const msg = mensagens[Math.floor(Math.random()*mensagens.length)]

infobox.innerText = nome+" "+msg

infobox.style.opacity=1
infobox.style.transform="translateY(0)"

setTimeout(()=>{

infobox.style.opacity=0
infobox.style.transform="translateY(20px)"

},5000)

}

setInterval(mostrarInfobox,60000)