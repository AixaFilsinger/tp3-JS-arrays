let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let i;

document.write("<h2>Los 12 meses del año se muestran a continuación:</h2>");
document.write("<ul>");
for (i = 0; i < meses.length; i++) {
  document.write(`<li> ${meses[i]} </li>`);
}

document.write("</ul>");
