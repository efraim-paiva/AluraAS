
let nomeAmigo = document.getElementById('nome-amigo');
let displayNomes = document.getElementById('lista-amigos');
let resultado = document.getElementById('lista-sorteio');

let amigosArray = [];

function adicionar() {
    if (nomeAmigo.value == "") {
        alert('Digite um nome!');
        return;
    } else if (amigosArray.includes(nomeAmigo.value)) {
        alert('Nome já adicionado!');
        nomeAmigo.value = "";
        return;
    } else {
        amigosArray.push(nomeAmigo.value);
        displayNomes.innerHTML = amigosArray;
        nomeAmigo.value = "";
    }
}

function sortear() {
    let sorteado = Math.floor(Math.random() * amigosArray.length);

    if (amigosArray.length == 0) {
        alert('Nenhum nome adicionado!');
        return;
    } else {
        resultado.innerHTML = amigosArray[sorteado];
        amigosArray.pop(sorteado);
        displayNomes.innerHTML = amigosArray;
    }
}

function reiniciar() {
    //limpa o array de amigos incluidos
    //limpa o input
    //limpa o resultado


}