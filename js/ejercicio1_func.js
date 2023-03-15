let num = parseInt(prompt("Ingrese un número entero"));

function parOimpar(numero)
 {
    if(numero % 2 === 0){
        document.write(`El numero ${numero} es PAR`)
    } 
    else{
        if(numero % 2 === 1){
            document.write(`El numero ${numero} es IMPAR`)
        } 

    }
    return;

}

parOimpar(num);