let numero = 0;
let subindo = true;

const intervalo = setInterval(() => {
    console.log(numero);

    if (subindo) {
        numero++;

        if (numero > 10) {
            subindo = false;
            numero = 9;
        }
    } else {
        numero--;

        if (numero < 0) {
            clearInterval(intervalo);
        }
    }
}, 1000);
