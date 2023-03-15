let ladoA= parseFloat(prompt("Ingrese el lado mas largo del rectangulo"));
let ladoB =parseFloat(prompt("Ingrese el lado mas corto del rectangulo"));;
let resultado = 0;

function perimetro (a, b){
    resultado = 2*(a +b);
    document.write(`El perimetro del rectangulo con lados: ${ladoA} y ${ladoB} es ${resultado}`)
    return;
}

 perimetro(ladoA, ladoB);
