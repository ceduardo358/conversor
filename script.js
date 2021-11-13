function calc() {
        var n1 = document.getElementById('celsius').value;
            var calculo = Number((n1 * 1.8) + 32);
        document.getElementById('resposta').innerHTML= "Resultado da conversão:" + calculo.toFixed(1) + "Fahrenheit";
}
