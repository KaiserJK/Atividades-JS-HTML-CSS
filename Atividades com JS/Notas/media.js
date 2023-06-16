//criar referencias ao elementoa da pagina
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulario
    e.preventDefault();

    //obter os valores digitados
    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    const media = (nota1 + nota2) / 2;

    resp1.innerText = `Media das Notas ${media.toFixed(2)}`;

    if (media >= 7) {
        resp2.innerText = `Parabens ${nome}! Voce foi Aprovado(a)`;
        resp2.style.color = "green";
    } else if (media >= 4) {
        resp2.innerText = `${nome}, Voce precisara fazer recuperacao`;
        resp2.style.color = "blue";
    } else {
        resp2.innerText = `Sinto Muito ${nome}! Voce foi Resprovado(a)`;
        resp2.style.color = "red";
    }

})




