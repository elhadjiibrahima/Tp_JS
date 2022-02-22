const passwordOutput =  document.getElementById('password-output');
const grt=document.getElementById('password-generator')
const butt=document.getElementById('butt');
const werty=document.getElementById('werty')
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
          werty.addEventListener('mouseover',function(){
        butt.style.visibility='visible';
    });
    passwordOutput.addEventListener('mouseleave',function(){
        butt.style.visibility='hidden';
    })
  
   
}

function copieur(){
    passwordOutput.select();
    document.execCommand('copy');
}

