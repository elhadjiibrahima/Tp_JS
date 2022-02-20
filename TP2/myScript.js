 /*--------------------------//Recuperation des valeur;-----------------------*/
const conte1 = document.getElementById('aa');
const conte2 = document.getElementById('b')
const mesparagraphe = document.querySelectorAll('p');
const midd = document.getElementsByClassName('midd');
const buton1 = document.getElementById('c')
const buton2 = document.getElementById('dd')
function deplace() {
    for (let para = 0; para < mesparagraphe.length; para++) {
        mesparagraphe[para].addEventListener('click', function() {
            mesparagraphe[para].classList.toggle("actived")
 /*------------------------//transfert des paragraphe--------------------*/
 buton1.addEventListener('click', function() {
                const seleted = document.querySelector('.actived')
                conte2.appendChild(seleted);})
        })
        buton2.addEventListener('click', function() {
            const selete = document.querySelector('.actived')
            conte1.appendChild(selete);})
        }    
}
deplace()