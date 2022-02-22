 /*--------------------------//Recuperation des valeur;-----------------------*/
const conte1 = document.getElementById('aa');
const conte2 = document.getElementById('b')

const midd = document.getElementsByClassName('midd');
const buton1 = document.getElementById('c')
const buton2 = document.getElementById('dd')
/////////////////////////creation d'element
const p1=document.createElement('p');
const p2=document.createElement('p');
const p3=document.createElement('p');
const p4=document.createElement('p');

///attribut class
p1.setAttribute('class','texte');
p2.setAttribute('class','texte');
p3.setAttribute('class','texte');
p4.setAttribute('class','texte');
//attribut id
p1.setAttribute('id','texte1');
p1.setAttribute('id','texte2');
p1.setAttribute('id','texte3');
p1.setAttribute('id','texte4');

conte1.appendChild(p1);
conte1.appendChild(p2);
conte1.appendChild(p3);
conte1.appendChild(p4);

tab=[
    'Mon Premier','Mon Deuxieme','Mon Troisieme','Mon Quatrieme',
];

p1.innerText=tab[0];
p2.innerText=tab[1];
p3.innerText=tab[2];
p4.innerText=tab[3];
const mesparagraphe=document.querySelectorAll('p');

function deplace() {
    for (let para = 0; para < mesparagraphe.length; para++) {
    mesparagraphe[para].addEventListener('click', function() {
        mesparagraphe[para].classList.toggle("actived")
        /*------------------------//transfert des paragraphe--------------------*/
    })
    buton1.addEventListener('click', function() {
        const seleted = document.querySelector('.actived')
        conte2.appendChild(seleted);
    })
    buton2.addEventListener('click',function(){
        const seleted = document.querySelector('.actived')
         conte1.appendChild(seleted);
    })

    

    } 
}
deplace()