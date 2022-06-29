var button = document.getElementById('button')
var button1 = document.getElementById('button1')
var res = document.getElementById('res')
var numero = 0
var tentar = document.getElementById('tentar')
var ponteiro = document.getElementById('ponteiro')
var classificação = document.getElementById('classificação')

button.addEventListener('click' , function(event){
     var duration = 10; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
    button.classList.add('remove')   
    ponteiro.classList.add('ponteiro')

})

button1.addEventListener('click' , function(event){
    numero++
    res.innerHTML = `${numero} Cliques` 
    if (numero < 10) {
        classificação.innerHTML = `Noob`
    } else if (numero < 20) {
        classificação.innerHTML = `não te faz menos Noob` 
    } else if (numero < 30) {
        classificação.innerHTML = `ainda não te faz menos Noob`  
    } 
    else if (numero < 40) {
        classificação.innerHTML = `Só isso?`  
    } 
    else if (numero < 50) {
        classificação.innerHTML =  `melhorou,já não é mais Noob` 
    } 
    else if (numero < 60) {
        classificação.innerHTML = `boa`
    }  else if (numero < 70) {
        classificação.innerHTML = `bom mesmo` 
    } 
    else if (numero < 80) {
        classificação.innerHTML = `CARAMBA,calma lá`
    } 
    else if (numero < 90) {
        classificação.innerHTML = `Você ta bem ?` 
    }  else if (numero < 100) {
        classificação.innerHTML = `Você tem vida lá fora ?`  
    } 
    else if (numero < 110) {
        classificação.innerHTML = `Seus pais não te amam ?` 
    } 
    else if (numero < 120){
        classificação.innerHTML = `TEM UM MUNDO LÀ FORA` 
    }  
    else if (numero < 130) {
        classificação.innerHTML = `Chega...`
    }
    else if (numero < 140) {
        classificação.innerHTML = `Só isso ?`
    }
    else if (numero < 150) {
        classificação.innerHTML = `vou falar pro Neymar que você só conseguiu isso`
    }
    else if (numero < 160) {
        classificação.innerHTML = `CHEGA`
    }
    else if (numero < 170) {
        classificação.innerHTML = `Que isso meu filho,calma`
    }
    else if (numero < 180) {
        classificação.innerHTML = `e agora giovanni?`
    }
    else if (numero < 190) {
        classificação.innerHTML = `SAI`
    }
    else if (numero < 200) {
        classificação.innerHTML = `tenho mais nem frase pra isso`
    }
    else if (numero < 240) {
        classificação.innerHTML = `Vc já provou oque tinha para provar.`
    }
    else if (numero < 250) {
        classificação.innerHTML = `Só isso ?`
    }

})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

     if(--timer < 0) {
            clearInterval(timer = 0)
            button1.setAttribute("disabled", "disabled")
            tentar.style.display = 'block'
    }
  }, 1000);
}
function tentar1() {
            location.reload()
}
tentar.addEventListener('click', tentar1)













