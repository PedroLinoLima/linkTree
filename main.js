'mode strict'

const links = {
    "nome": "Meus Projetos - Pedro Lino de Lima",
    "img": "avatar.jpg",
    "links": [
        {
            "titulo": "Calculadora JS",
            "url": "https://pedrolinolima.github.io/Calculadora_JS/"
        },
        {
            "titulo": "Todo-list JS",
            "url": "https://pedrolinolima.github.io/todo-list/"
        },
        {
            "titulo": "Semaforo JS",
            "url": "https://pedrolinolima.github.io/Semaforo.js/"
        },
        {
            "titulo": "Lâmpada JS",
            "url": "https://pedrolinolima.github.io/Lampada.js/"
        }
        {
            "titulo": "Calculadora IMC JS",
            "url": "https://pedrolinolima.github.io/IMC/"
        }
    ]
}

const avatar = document.getElementById('avatar');
avatar.src = links.img;

const titulo = document.getElementById('titulo');
titulo.textContent = links.nome;

console.log(linkTree);
    
for (let index = 0; index < links['links'].length; index++) {
const linkTree = document.getElementById('linkTree');
const a = document.createElement('a');
console.log(a);

a.classList.add('link');

a.href = (links["links"][index]['url']);
a.innerText = links["links"][index]['titulo'];

linkTree.appendChild(a);
}
