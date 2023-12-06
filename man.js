
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    let campoA = document.getElementById('campoA').value;
    let campoB = document.getElementById('campoB').value;

    
    if (parseInt(campoB) > parseInt(campoA)) {
        
        alert('Formulário válido! Número B é maior que o número A.');
    } else {
        
        alert('Erro! Número B deve ser maior que o número A.');
    }
});
