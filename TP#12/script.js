const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

function randomWords(){    
    let num = Math.floor(Math.random() * words.length);    
    return  words[num];
}

function addToDOM(palabraAleatoria){
    const h1 = document.querySelector("#randomWord");    
    h1.textContent = palabraAleatoria;
}

function actualizarTiempo(){    
    if(time > 0){
        time--;
        tiempo.textContent = time+"s";    
    }
    else{
        gameOver();
        clearInterval(miIntervalo)
    }
}

function updateScore(){
    score++;
    puntuaje.textContent = score;
}

function gameOver(){
    const container = document.querySelector("#end-game-container");
    
    const h1GOver = document.createElement("h1");
    const pGOver = document.createElement("p");
    const btn_reiniciar = document.createElement("button");

    h1GOver.textContent = "Se acabó el tiempo";
    pGOver.textContent = "Puntaje: "+score;
    btn_reiniciar.textContent = "Volvé a empezar";

    btn_reiniciar.addEventListener("click", () => {        
        location.reload();
    });

    container.appendChild(h1GOver);
    container.appendChild(pGOver);
    container.appendChild(btn_reiniciar);

    

}

let palabraAleatoria, time = 10, score = 0; 
const input = document.querySelector("#text")
const tiempo = document.querySelector("#timeSpan");
const puntuaje = document.querySelector("#score")

input.addEventListener("keyup", (event) => {
    
    if(palabraAleatoria == input.value){
        palabraAleatoria = randomWords();
        input.value = "";
        addToDOM(palabraAleatoria);
        time += 3;
        updateScore();
    }
})

palabraAleatoria = randomWords();
addToDOM(palabraAleatoria);
const miIntervalo = setInterval(actualizarTiempo, 1000);


  