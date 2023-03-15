let suma = 0;
let i;
let bandera = 0;
let dado1 = Math.ceil(Math.random()*6);
let dado2 = Math.ceil(Math.random()*6);
let repeticiones = [];
let resultados = [];

for (i = 0; i < 50; i++){
    bandera = 0;
     dado1 = Math.ceil(Math.random()*6);
     dado2 = Math.ceil(Math.random()*6); 
    document.write(`<h4>Dado N°1 resultado:</h4>`);
    document.write(`<h4>${dado1}</h4>`);
    document.write(`<h4>Dado N°2 resultado:</h4>`);
    document.write(`<h4>${dado2}</h4>`);
    suma= dado1 + dado2;
    document.write(`<h4>La suma del resultado de los dados es:</h4>`);
    document.write(`<h4>${suma}</h4>`);
    document.write("<hr>");

    for ( let j = 0; j < resultados.length; j++){
        if(resultados[j] == suma)
        {
            repeticiones[j] = repeticiones[j] + 1;
            bandera = 1;

        }
    }

    if(bandera == 0)
    {
        resultados.push(suma);
        repeticiones.push(1);

    }
      
}

for(let j = 0; j < resultados.length; j++){
    document.write(` resultado ${resultados[j]} se repite: `);
    document.write(`${repeticiones[j]} veces`);
    document.write("<br>")
    
}
