const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const firts = document.getElementById('first-verb');
const second = document.getElementById('second-verb');
const third= document.getElementById('third-verb');
const four = document.getElementById('four-verb');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allRightCounter = document.getElementById('all-rigth-counter');
const verbsContainer = document.getElementById('verbs-container');

//const numberOfVerbs = verbs.length;

let answerRoullete = [0,1,1,1];
let everyNumberOfverbs = [];
let rigthAnswer;
let allRightAnswer;

next.addEventListener('click', function(){
    ponerVerbo();
    next.style.display = 'none'
    
});


function ponerVerbo(){
    showVerb.innerHTML = 'asdnasjdn askn'
}