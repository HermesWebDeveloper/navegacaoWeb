function meuNome(){
    let nome = "Hermes"
    alert(nome)
}

function nomeIdade(){
    let anoAtual = Date.getFullYear
    let nome = document.getElementById('name').value;
    let anoNascimento = (document.getElementById('anoNascimento').value);
    anoNascimento = parseFloat(anoNascimento)

    idade = anoAtual - anoNascimento

    document.getElementById('resultadoNomeIdade').innerHTML = `Sua idade é: ${idade}`;
}