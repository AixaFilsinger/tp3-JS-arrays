let ciudades = [];
let ciudad = "";
let i;

do {
   ciudad = prompt("Ingrese una ciudad")
   ciudades.push(ciudad);
    
} while (confirm("¿Quiere ingresar más ciudades?"));

document.write("<h2>Las ciudades són:</h2>");
document.write("<ul>");
for (i = 0; i < ciudades.length; i++) {
  document.write(`<li> ${ciudades[i]} </li>`);
}

document.write("</ul>");

document.write(`<h2>Su longitud es: ${ciudades.length} </h2>`)

document.write("<h2>Las ciudades són:</h2>");
document.write("<ul>");
document.write(`<li>Elemento en la primera posicion: ${ciudades[0]} </li>`)
document.write(`<li>Elemento en la tercera posicion: ${ciudades[2]} </li>`)
document.write(`<li>Elemento en la ultima posicion: ${ciudades[ciudades.length-1]} </li>`)
document.write("</ul>");

ciudades.push("Paris");

document.write(`<h1>Elemento en la segunda posicion es: ${ciudades[1]} </h1>`)

document.write('<h2>Modificar un elemento del arreglo (2)</h2>');

ciudades[1] = 'Barcelona';

document.write(`<h1>Elemento en la segunda posicion es: ${ciudades[1]} </h1>`)

