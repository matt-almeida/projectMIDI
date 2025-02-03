function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let cont = 0;

for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
}
