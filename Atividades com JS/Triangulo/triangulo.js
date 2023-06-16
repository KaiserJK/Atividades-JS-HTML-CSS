function verificarTriangulo (){

    // variaveis
    const frm = document.querySelector("form");

    // teste o chamado da função como clique do botão
     console.log("A é")
    // converter dados para numero 

    ladoA = Number(inladoA.value);
    ladoB = Number(inladoB.value);
    ladoC = Number(inladoC.value);

     // criar condições para exibir a resposta 
    if ( ladoA > ladoB + ladoC ||
        ladoB > ladoA + ladoC || ladoC > ladoA + ladoB  ){
            outSimNao.textContent = " os lados não podem formar um triangulo"

        
    } else {
        outSimNao.textContent = " Os lados podem formar um triangulo "
        
        if ( ladoA == ladoB && ladoA == ladoC) {
            outTipo.textContent = " Tipo equilátero "
            outTipo.style.color = "red"
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {

            outTipo.textContent = "Tipo isóceles"
            outTipo.style.color = "blue"
        } else {
            outTipo.textContent = "Tipo escaleno"
            outTipo.style.color = "green"
        }
    }

}
// função ao botão
    var btVerificar = document.getElementById("btVerificar");
    btVerificar.addEventListener("click", verificarTriangulo);