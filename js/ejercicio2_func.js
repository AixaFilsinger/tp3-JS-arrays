/*Definir una función que muestre información
 sobre una cadena de texto que se le pasa como argumento.
  A partir de la cadena que se le pasa, la función determina 
  si esa cadena está formada sólo por mayúsculas, sólo por
   minúsculas o por una mezcla de ambas.
*/ 

let cadena = prompt("Ingrese una frase");

function infoCadena (cadena) {
    if(cadena == cadena.toUpperCase()){
        document.write("La cadena esta formada por Mayúsculas :)")
    }else 
    if(cadena == cadena.toLowerCase()){
        document.write("La cadena esta formada por Minúsculas :)")
    } else{
        document.write("La cadena esta formada por Minúsculas y Mayúsculas :)")
    }

}

infoCadena(cadena);