var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 900, 600);

var raio = 56;

var xAleatorio;
var yAleatorio;

// function background {
//     var background = new Image();
//     background.src = './img/background.png';
//     pincel.drawImage(fundoImg, x - 53, y - 55);
// }
// Image();

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 900, 600);
}

function desenhaAlvo(x, y) {
    // desenhaCirculo(x, y, raio + 20, 'red');
    // desenhaCirculo(x, y, raio + 10, 'white');
    // desenhaCirculo(x, y, raio, 'red');
    var fundoImg = new Image();
    fundoImg.src = './img/terrorist.png';
    pincel.drawImage(fundoImg, x - 53, y - 55);
}

function sorteiaPosicao(maximo) {
    return Math.floor(Math.random() * maximo);
}

function atualizaTela() {
    limpaTela();
    xAleatorio = sorteiaPosicao(900);
    yAleatorio = sorteiaPosicao(600);
    desenhaAlvo(xAleatorio, yAleatorio);
}

setInterval(atualizaTela, 600);

function dispara(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    if (
        x > xAleatorio - raio &&
        x < xAleatorio + raio &&
        y > yAleatorio - raio &&
        y < yAleatorio + raio
    ) {
        console.log('acertou!');

        adicionaNoContador();
    }
    desenhaTiro(x, y);
}

tela.onclick = dispara;

var contador = 0;

function adicionaNoContador() {
    atualizaContador(++contador);
}

function atualizaContador(valor) {
    document.getElementById('contador').innerHTML = valor;
}

function resetar() {
    contador = 0;
    atualizaContador(0);
}

function desenhaTiro(x, y) {
    var fundoImg = new Image();
    fundoImg.src = './img/tiro.png';
    pincel.drawImage(fundoImg, x - 20, y - 20);
}