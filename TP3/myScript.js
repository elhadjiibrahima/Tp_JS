const passwordOutput =  document.getElementById('password-output');
const grt=document.getElementById('password-generator')
const dataLowercase='abcdefghijklmnopqrstuvwxyz'.split('');
const dataUppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const dataNumbers ='0123456789'.split('');
const dataSymbols='!@#$%&*^?/|{}())'.split('');
function generatePassword(){
    const data=[].concat(
        lowercase.checked ? dataLowercase : [],
        uppercase.checked ? dataUppercase : [],
        numbers.checked ?  dataNumbers : [],
        symbols.checked ? dataSymbols : [],
    );
    let passwordLength = parseInt(document.getElementById('display-p-length').value);
    let newPassword='';
    for(let i=0;i<passwordLength;i++){
        newPassword+= data[Math.floor(Math.random()*data.length)];
    }
    passwordOutput.value=newPassword;
   const butt=document.getElementById('butt');
   butt.style.visibility='visible';
   
}

function copieur(){
    passwordOutput.select();
    document.execCommand('copy');
}

