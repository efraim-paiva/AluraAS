
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
        amigosArray.splice(sorteado, 1);
        displayNomes.innerHTML = amigosArray;
    }
}

function reiniciar() {
    if (amigosArray.length == 0 && resultado.innerHTML == "") {
        alert('Nenhum nome adicionado!');
        return;
    } else if (confirm('Deseja reiniciar?')) {
        amigosArray = [];
        displayNomes.innerHTML = "";
        resultado.innerHTML = "";
        nomeAmigo.value = "";
    }
}