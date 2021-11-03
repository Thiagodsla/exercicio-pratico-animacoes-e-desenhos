var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'rgb(109, 129, 241)';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();

    console.log(x + ',' + y);
}

tela.onclick = desenhaCirculo;