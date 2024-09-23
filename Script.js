
const Calculadora = document.getElementById('Calculo');
const Resultado = document.getElementById('Resultado');



Calculadora.addEventListener('click', function imc() {
    const Nome = document.getElementById('Preencher_Nome').value;
    const Altura = document.getElementById('Preencher_Altura').value;
    const Peso = document.getElementById('Preencher_Peso').value;

    if(Nome== '' && Altura == '' && Peso== '' ){
        Resultado.style.display = "block"
        Resultado.style.color = "Black"
        Resultado.textContent = "Preencha todos os campos"
    } else {
        const ValorIMC = (Peso / (Altura * Altura)).toFixed(1)
        
        let situacao = ''

        if(ValorIMC < 18.5){
            situacao = "abaixo do peso."
        } else if (ValorIMC < 25){
            situacao = "com o peso ideal."
        } else if(ValorIMC < 30){
            situacao = "levemente acima do peso."
        } else {
            situacao = "acima do peso."
        }
        Resultado.style.display = "block"
        Resultado.textContent = `${Nome} seu IMC é ${ValorIMC}, com o seu Peso: ${Peso} e sua Altura: ${Altura}, você está ${situacao}`
    }
})