let suma = [];

let i;
let contador = 1;

let dado1 = Math.ceil(Math.random()*6);
let dado2 = Math.ceil(Math.random()*6); 



for (i = 0; i < 50; i++){
     dado1 = Math.ceil(Math.random()*6);
     dado2 = Math.ceil(Math.random()*6); 
    document.write(`<h4>Dado N°1 resultado:</h4>`);
    document.write(`<h4>${dado1}</h4>`);
    document.write(`<h4>Dado N°2 resultado:</h4>`);
    document.write(`<h4>${dado2}</h4>`);
    suma[i]= dado1 + dado2;
    document.write(`<h4>La suma del resultado de los dados es:</h4>`);
    document.write(`<h4>${suma[i]}</h4>`);
    document.write("<hr>");
      
}
