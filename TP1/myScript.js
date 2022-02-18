//Fonction pour delete
//function remove(idRemove) {
//     elementToRemove = document.getElementById(idRemove);
//     parentOfElement = elementToRemove.parentNode;
//     OfElement.removechild(elementToRemove)


/*  <div class="headd">
            <div class="table">
                <div class="barre">
                    <div class="menu">
                        <i class="fa-regular fa-pen-to-square" id="edit"></i>
                        <i class="fa-regular fa-trash-can" id="delet"></i>
                    </div>
                    <!-- <div class="note"> -->
                    <textarea name="note" id="texte"></textarea>
                    <!-- </div> -->
                </div>
            </div>

        </div>
    </div>
 */
function noteAlgo() {
    const add = document.getElementById('add');
    add.addEventListener('click', function() {

        const headd = document.querySelector('.headd');
        //creation element de la div.headd
        // creation element de la div.table
        const table = document.createElement('div');
        //creation element de la div.barre
        const barre = document.createElement('div');
        const menu = document.createElement('div');
        const edit = document.createElement('i');
        const delet = document.createElement('i');
        const texte = document.createElement('textarea');


        //organisation des element
        headd.appendChild(table);
        table.appendChild(barre);
        barre.appendChild(menu);
        barre.appendChild(texte);
        menu.appendChild(edit);
        menu.appendChild(delet);
        //style
        table.setAttribute('class', 'table');
        barre.setAttribute('class', 'barre ');
        menu.setAttribute('class', 'menu');
        edit.setAttribute('class', 'fa-regular fa-pen-to-square');
        delet.setAttribute('class', 'fa-regular fa-trash-can');
        texte.setAttribute('id', 'note')

        delet.addEventListener('click', function() {
            headd.removeChild(table)
        })
        edit.addEventListener('click', function() {
            texte.toggleAttribute('disabled')
            texte.focus()

            /* if (texte.disabled == true) {
                texte.disabled = false
            } else {
                texte.disabled = true
            } */

        })



    })










}
noteAlgo();