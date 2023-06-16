//criar referencias ao elementoa da pagina
const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulario
    e.preventDefault();

    //obter os valores digitados
    const valor = Number(frm.valor.value);

    money = valor
    minutos = 0
    sit = true


    if (money < 1) {
        Alerta.textContent = "Valor Insuficiente"
        Alerta.style.color = "red"
    } else {
        while (sit) {
            if (money >= 3) {
                money -= 3
                minutos += 120
                
            } else if (valor >= 1.75) {
                money -= 1.75
                minutos += 60
                
            } else if (valor >= 1) {
                money -= 1
                minutos += 30
                
            }if (money < 1) {
                Tempo.innerText = "Tempo : " + minutos + " Minutos";
                Tempo.style.color = "green";
                sit = false
                if(money > 0){
                    Troco.textContent = "Seu troco é de :" + money;
                }

            }
        }
    }

})



