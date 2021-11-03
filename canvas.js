var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'rgb(109, 129, 241)';
pincel.fillRect(0, 0, 600, 400);

// feito na aula
// pincel.fillStyle = 'green';
// pincel.fillRect(0, 0, 200, 400);

// pincel.fillStyle = 'red';
// pincel.fillRect(400, 0, 200, 400);

// pincel.fillStyle = 'yellow';
// pincel.beginPath();
// pincel.moveTo(300, 200);
// pincel.lineTo(200, 400);
// pincel.lineTo(400, 400);
// pincel.fill();

// pincel.fillStyle = 'red';
// pincel.beginPath();
// pincel.arc(300, 200, 50, 0, 2 * 3.14);
// pincel.fill();

// exercitando
pincel.fillStyle = 'rgb(245, 255, 157)';
pincel.fillRect(140, 0, 60, 400);

pincel.fillStyle = 'rgb(245, 255, 157)';
pincel.fillRect(0, 180, 600, 60);