/* Carne - 400 gr por pessoa + de 6 horas - 650 gr
   Cerveja - 1200 ml por pessoa + de 6 horas - 2000 ml
   Refrigerante/água - 1000 ml por pessoa + de 6 horas - 1500 ml

   Crianças valem por 0,5*/

   let inputAdultos = document.getElementById("adultos");
   let inputCriancas = document.getElementById("criancas");
   let inputDuracao = document.getElementById("duracao");

   let resultado = document.getElementById("resultado")

   function calcular() {
       let adultos = inputAdultos.value;
       let criancas = inputCriancas.value;
       let duracao = inputDuracao.value;

       let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP() / 2 * criancas);
       let qdtTotalCerveja = bebidaPP(duracao) * adultos + (bebidaPP() / 2 * criancas);
       let qdtTotalBebida = cervejaPP(duracao) * adultos;

       resultado.innerHTML = `<p>${qdtTotalCarne/1000}kg de Carne</p>`
       resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} Latas de Cerveja</p>`
       resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebida/2000)} Pet's 2L de Bebida</p>`
   }

   function carnePP(duracao) {
       if(duracao >= 6) {
           return 650;
       } else {
           return 400;
       }
   }

   function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidaPP(duracao) {
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}