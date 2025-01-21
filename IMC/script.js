document.getElementById("formIMC").addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc =  peso / (altura * altura) 
    const resultadoDiv = document.getElementById("resultado")

    if (imc <= 18.5) {
        mensagem = `Seu IMC foi de ${imc.toFixed(2)}. Você está ABAIXO DO PESO.`;
    } else if (imc <= 24.9) {
        mensagem = `Seu IMC foi de ${imc.toFixed(2)}. Você está no peso IDEAL.`;
    } else if (imc <= 29.9) {
        mensagem = `Seu IMC foi de ${imc.toFixed(2)}. Você está com SOBREPESO.`;
    } else if (imc <= 34.9) {
        mensagem = `Seu IMC foi de ${imc.toFixed(2)}. Você está com OBESIDADE GRAU I.`;
    } else if (imc <= 39.9) {
        mensagem = `Seu IMC foi de ${imc.toFixed(2)}. Você está com OBESIDADE GRAU II.`;
    } else {
        mensagem = `Seu IMC foi de ${imc.toFixed(2)}. Você está com OBESIDADE GRAU III.`;
    }

    resultadoDiv.textContent = mensagem;
});
