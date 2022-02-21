const quizData=[
    {
        question:'Qui est le meilleur joueur du monde ?',
        a:'ronaldo',
        b:'sadio mane',
        c:'messi',
        d:'neymar',
        correct:'b',
    },
    {
        question:'Quel est le Meilleur language de programmation en 2022 ?',
        a:'JAVA',
        b:'C',
        c:'PYTHON',
        d:'JAVASCRIPT',
        correct:'c',
    },
    
    {
        question:'Qui est le plus bavard de la classe ?',
        a:'traore',
        b:'ahmed ',
        c:'der',
        d:'wads',
        correct:'a',
    },
   
    {
        question:'kane mo doul def veille si classe bi ?',
        a:'birame',
        b:'ahmed dame ',
        c:'rawane',
        d:'ibrahima',
        correct:'b',
    },
    {
        question:'kane mo doul nelaw si classe bi ?',
        a:'adama ndiaye',
        b:'mor diouf ',
        c:'rawane',
        d:'souleymane diallo',
        correct:'d',
    },
    {
        question:'kane mo dak nelaw ?',
        a:'birame',
        b:'adama ndiaye ',
        c:'rawane',
        d:'ibrahima',
        correct:'b',
    },
    {
        question:'kane moy kagn kat classe bi ?',
        a:'birame',
        b:'traore ',
        c:'der',
        d:'yusupha',
        correct:'a',
    },
]
const quiz=document.getElementById('quiz');
const answerE1s=document.querySelectorAll('.answer')
const questionE1=document.getElementById('question');
const a_text=document.getElementById('a-text');
const b_text=document.getElementById('b-text');
const c_text=document.getElementById('c-text');
const d_text=document.getElementById('d-text');
const submitBnt=document.getElementById('submit')

let currentQuiz= 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    deselectAnswer();

    const currentQuizData=quizData[currentQuiz];
    questionE1.innerHTML =currentQuizData.question
    a_text.innerHTML=currentQuizData.a
    b_text.innerHTML=currentQuizData.b
    c_text.innerHTML=currentQuizData.c
    d_text.innerHTML=currentQuizData.d
}
function deselectAnswer(){
    answerE1s.forEach(answerE1 =>answerE1.checked=false )
}
function getSelected(){
    let answer
    answerE1s.forEach(answerE1 => {
        if(answerE1.checked){
            answer =answerE1.id
        }
    })
    return answer
}
submitBnt.addEventListener('click', () => {
   const answer=getSelected()
   if(answer){
       if(answer===quizData[currentQuiz].correct){
           score++; 
       }
       currentQuiz++
       if(currentQuiz<quizData.length){
           loadQuiz()
       }
       else{
           quiz.innerHTML=`<h2>vous avez trouve ${score}/${quizData.length}des question</h2>
           <button onclick="location.reload()">Reprendre</button>
           ` ;      
       }
   }
})




