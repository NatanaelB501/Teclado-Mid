function tocaSom (idElementoAudio) {
    document.getElementById(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
console.log(listaDeTeclas);


//enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `som_${instrumento}`;   //template string.
    // console.log(idAudio);
    // console.log(contador);
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    } 

    
}

