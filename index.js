"use strict";

/* <h3>Consigna</h3>
    <div>
<p>Calcular e informar un sueldo sabiendo que:</p>
<p>- La categoría define el sueldo básico mensual (1: u$s 1000, 2: u$s 1500, 3: u$s 2000).</p>
<p>- La subcategoría define el multiplicador (A: x1.5, B: x2, C: x2.5).</p>
<p>- Ambos datos son ingresados por el usuario.</p>
<p>Además, informar dentro de qué rango está el sueldo:</p>
<p>- Si está en el rango ‘inicial’: entre u$s 1500 a u$s 3000, inclusive.</p>
<p>- Si está en el rango ‘intermedio’: entre u$s 3001 y u$s 4000, inclusive.</p>
<p>- Si está en el rango ‘avanzado’: si supera los u$s 4000.</p>
</div>
*/
let categoriaInput = parseInt(prompt(`porfa ingresa categoria por favor 1: u$s 1000, 2: u$s 1500, 3: u$s 2000`));

let subcategoriaInput = prompt(`porfa ingresa sub-categoria por favor A - B - C`);

let basico = 0;
let multiplicador = 0;

switch (categoriaInput) {
    case 1:
        basico = 1000;
        break
    case 2:
        basico = 1500;
        break
    case 3:
        basico = 2000;
        break
        
    default:
        console.error("algo salio mal :( RELOAD")
        break
}


switch (subcategoriaInput.toUpperCase()) {
    case "A":
        basico = basico * 1.5;
        break
    case "B":
        basico = basico * 2;
        break
    case "C":
        basico = basico *  2.5;
        break
        
    default:
        console.error("algo salio mal :( RELOAD")
        break
}

let rango = "a";

if ((basico>=1500) && (basico<=3000)){
    rango="inicial";

} else if ((basico>3000) && (basico<=4000)) {
    rango="intermedio";
} else {
    rango="avanzado";
}

alert(`tu sueldo es de ${basico} y estas en rango ${rango}`);

