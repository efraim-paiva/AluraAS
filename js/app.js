
let nomeAmigo = document.getElementById('nome-amigo');
let displayNomes = document.getElementById('lista-amigos');

let amigosArray = [];

function adicionar() {
    if (nomeAmigo.value == "") {
        alert('Digite um nome!');
        return;
    } else if (amigosArray.includes(nomeAmigo.value)) {
        alert('Nome já adicionado!');
        return;
    } else {
        amigosArray.push(nomeAmigo.value);
        displayNomes.innerHTML = amigosArray;
        nomeAmigo.value = "";
    }
}

function sortear() {
    //selecionar um valor do input de erray amigos de forma aleatoria 
}

function reiniciar() {
    //limpa o array de amigos incluidos
    //limpa o input
    //limpa o resultado


}