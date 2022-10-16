

// Principales caracteristicas del juego 
const showVerb = document.getElementById("showVerb");
const showImage = document.getElementById("showImage");
const showAudio = document.getElementById("showAudio");

// Elementos que nos ayudaran para realizar tareas en el jeugo

const next = document.getElementById("next");
const verbsCounter = document.getElementById("verbs-counter");
const allRightCounter = document.getElementById("all-right-answers");
const verbsContainer = document.getElementById("verbs-container");

// Declaramos las respuestas que se mostararan aljugador

const first = document.getElementById("first-verb");
const second = document.getElementById("second-verb");
const third = document.getElementById("third-verb");
const fourth = document.getElementById("fourth-verb");

// Verbos que se tienen para jugar, con esto sacamos que tan largo es el array
const numberOfVerbs = verbs.length;

// Solo declaramos  una correcta y las demas incorrectas

let answerRoullete = [0,1,1,1];

let everyNumberOfVerbs = [];

// Respuestas correctas 
let rightAnswer; 

//Declaramos el contador de respuestas correctas
let rightAnswersCounter = 0; 

// Evento  para ocultar el icono de comenzar
next.addEventListener("click",function(){
  ponerVerbo();
  next.style.display = 'none';
});


//Creamos una lista random
makeRandomList();

// Definimos por que pocision comienza. En este caso es la  ultima poscicion
let lastPosition = everyNumberOfVerbs.length-1;


//Realizamos  una lista de numero
function makeRandomList(){

  for (var i = 0; i < numberOfVerbs; i++){
    everyNumberOfVerbs.push(i);
  }
  everyNumberOfVerbs = everyNumberOfVerbs.sort(() => Math.random() - 0.5);
}


//Definimos los botonos con los posibles eventos que podra disparar
function buttonEffect(itsRight,button){
  if (itsRight){
    button.classList.add('rightAnswer');
    setTimeout(function(){
      button.classList.remove('rightAnswer');
    },1000);
    rightAnswersCounter = rightAnswersCounter+1;
  }else{
    button.classList.add('wrongAnswer');
    setTimeout(function(){
      button.classList.remove('wrongAnswer');
    },1000);
  }
  setTimeout(function(){
    ponerVerbo();
  },100);
}

// Se definen los botones con sus posibles eventos
first.addEventListener("click",function(){
  buttonEffect(isItRight_(first.innerHTML),this);
});

second.addEventListener("click", function(){
  buttonEffect(isItRight_(second.innerHTML),this);
});

third.addEventListener("click", function(){
  buttonEffect(isItRight_(third.innerHTML),this);
});

fourth.addEventListener("click", function(){
  buttonEffect(isItRight_(fourth.innerHTML),this);
});



//Definimos cuales son las opcciones para el verbo que se esta mostrando
function shuffleAnswers(array) {
  let numberOfAnswerButtons = array.length;
  let randomIndex;
  while (numberOfAnswerButtons != 0) {
    randomIndex = Math.floor(Math.random() * numberOfAnswerButtons);
    numberOfAnswerButtons--;
    [array[numberOfAnswerButtons], array[randomIndex]] = [
    array[randomIndex], array[numberOfAnswerButtons]];
  }

  return array;
}


//Checamos si la respuesta es correcta
function isItRight_(answer){
  return answer==rightAnswer?true:false;
}


function randomVerbo(notThisOne){
  theOne = Math.floor(Math.random()*verbos.length);
  return theOne == notThisOne?randomVerbo(notThisOne):theOne;
}

function ponerVerbo(){
  answerRoullete = shuffleAnswers(answerRoullete);

  let randomPosition = everyNumberOfVerbs[lastPosition];
  let imgText = "<img src='img/"+verbs[randomPosition]+".jpg' height:'140px' width='100px'>";

  
  first.classList.add("btn","btn-outline-primary","btn-md");
  second.classList.add("btn","btn-outline-primary","btn-md");
  third.classList.add("btn","btn-outline-primary","btn-md");
  fourth.classList.add("btn","btn-outline-primary","btn-md");

  if (lastPosition >= 0){
    var just_position = lastPosition+1;
    verbsCounter.innerHTML = ""+just_position+" / "+numberOfVerbs;
    allRightCounter.innerHTML = "Right Answers: "+rightAnswersCounter;
    showVerb.innerHTML = verbs[randomPosition];
    showImage.innerHTML = imgText;

    showAudio.src = "audio/"+verbs[randomPosition]+".mp3";
    showAudio.play();

    first.innerHTML = !answerRoullete[0]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    second.innerHTML = !answerRoullete[1]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    third.innerHTML = !answerRoullete[2]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    fourth.innerHTML = !answerRoullete[3]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];

    rightAnswer = verbos[randomPosition];
    lastPosition =lastPosition - 1;
  }else{
    verbsCounter.innerHTML = "0 / "+numberOfVerbs;
    allRightCounter.innerHTML = "Right answers: "+rightAnswersCounter;
    showVerb.innerHTML = "Congrats you have finished the quizz";

    verbsContainer.innerHTML = "";
  }

  
}

function repeat(){
    buttonClick = 3;
    if (buttonClick) {
        showAudio.play();
    }
    else {
       alert("Terminaron las repeticiones");
        
    }
}


