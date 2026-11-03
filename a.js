
let contador = 0;
let subindo = true;

const intervalo = setInterval(() => {
    console.log(contador);

    if (subindo) {
        contador++;

        if (contador > 10) {
            subindo = false;
            contador = 9;
        }
    } else {
        contador--;

        if (contador < 0) {
            clearInterval(intervalo);
        }
    }
}, 1000);
