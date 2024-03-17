// Get references to HTML elements
let nomeAmigo = document.getElementById('nome-amigo');
let displayNomes = document.getElementById('lista-amigos');
let resultado = document.getElementById('lista-sorteio');

// Array to store friend names
let amigosArray = [];

// Function to add a new friend
function adicionar() {
    // Check if the input field is empty
    if (nomeAmigo.value == "") {
        alert('Digite um nome!'); // Alert user to input requirement
        return;
    }
    // Check if the name already exists in the list
    else if (amigosArray.includes(nomeAmigo.value)) {
        alert('Nome já adicionado!'); // Alert user if name already exists
        nomeAmigo.value = ""; // Clear the input field
        return;
    }
    // Add the name to the list
    else {
        amigosArray.push(nomeAmigo.value);
        displayNomes.innerHTML = amigosArray; // Update the displayed list of friends
        nomeAmigo.value = ""; // Clear the input field
    }
}

// Function to randomly select a friend
function sortear() {
    // Check if the list of friends is empty
    if (amigosArray.length == 0) {
        alert('Nenhum nome adicionado!'); // Alert user if no friends are added
        return;
    } else if (amigosArray.length == 1) {
        alert('Apenas um nome adicionado!'); // Alert user if only one friend is added
    } else {
        // Randomly select two friends from the list
        let sorteado1
        let sorteado2

        while (true) {
            sorteado1 = Math.floor(Math.random() * amigosArray.length);
            sorteado2 = Math.floor(Math.random() * amigosArray.length);
            if (sorteado1 !== sorteado2) {
                break;
            }
        }

        resultado.innerHTML = `${amigosArray[sorteado1]} -> ${amigosArray[sorteado2]}`; // Display the selected friends

        amigosArray.splice(sorteado1, 1); // Remove the selected friend from the list
        amigosArray.splice(sorteado2 < sorteado1 ? sorteado2 : sorteado2 - 1, 1); // Remove the selected friend from the list
        displayNomes.innerHTML = amigosArray; // Update the displayed list of friends
    }
}

// Function to reset the application
function reiniciar() {
    // Check if no friends are added and no name is selected
    if (amigosArray.length == 0 && resultado.innerHTML == "") {
        alert('Nenhum nome adicionado!'); // Alert user if no friends are added
        return;
    }
    // Confirm with the user before resetting
    else if (confirm('Deseja reiniciar?')) {
        amigosArray = []; // Clear the list of friends
        displayNomes.innerHTML = ""; // Clear the displayed list of friends
        resultado.innerHTML = ""; // Clear the displayed result
        nomeAmigo.value = ""; // Clear the input field
    }
}