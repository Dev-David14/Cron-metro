const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset-count");


const cronometro = document.querySelector("#cronometro");

let decSeg = 0;
let contando;

let idContagem;

function mostraCronometro() {
    decSeg++;                           //incrementa cada décimo de segundo

    let ms = decSeg % 10;               //calcula os décimos de segundo
    let seg = Math.floor(decSeg / 10);  //calcula os segundos
    let min = Math.floor(seg / 60);     //calcula os minutos
    let hora = Math.floor(min / 60);    //calcula as horas

    //Formatação de exibição
    let strDecSeg = ms;
    let strHora = (hora < 10) ? '0' + hora : hora;
    let strMin = (min < 10) ? '0' + min : min;
    let strSeg = (seg < 10) ? '0' + seg : seg;

    //Exibição
    cronometro.innerHTML = `${strHora}:${strMin}:${strSeg}.${strDecSeg}`;

}

start.addEventListener("click", () => {
    if (contando === true) { return; }    //Se o cronômetro já estiver contando, não faz nada
    idContagem = setInterval(mostraCronometro, 100);
    stop.innerText = 'Pausar Cronômetro';
    contando = true;
});


stop.addEventListener('click', () => {
    if(contando===true){
        clearInterval(idContagem);                          //Pausa o cronômetro
        stop.innerText = 'Retomar Cronômetro';         //Altera o texto do botão
        contando = false;                                   //Altera a variável de controle
    }else if(contando===false){
        idContagem = setInterval(mostraCronometro, 100);    //Retoma o cronômetro
        stop.innerText = 'Pausar Cronômetro';          //Altera o texto do botão
        contando = true;                                    //Altera a variável de controle
    }else{
        return;
    }
});

zerar.addEventListener("click", () => {

    clearInterval(idContagem);                  //Pausa o cronômetro
    cronometro.innerHTML = '00:00:00.0';        //Reseta o cronômetro
    decSeg = 0;                                 //Reseta a variável de controle
    contando = false;                           //Altera a variável de controle

})