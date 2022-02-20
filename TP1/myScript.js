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
        })
    })
}
noteAlgo();