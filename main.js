'mode strict'

const links = {
    "nome": "Pedro Lino de Lima",
    "img": "avatar.jpg",
    "links": [
        {
            "titulo": "facebook",
            "url": "https://www.facebook.com/pedro.linodelima.3/"
        },
        {
            "titulo": "github",
            "url": "https://github.com/PedroLinoLima"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/in/pedro-lino-de-lima-18bb19204"
        },
        {
            "titulo": "instagram",
            "url": "https://www.instagram.com/pedro_ldl_oz/"
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