const prompt = require("prompt-sync")({ sigint: true });

//Ir al trabajo

let horaSalidaCasa = 7;
let hayTrafico = true;
let medioDeTransporte = "auto";

//marcación de ingreso al trabajo
let horaIngreso = prompt ("ingrese la hora actual: ");
let nombre = prompt ("ingrese su nombre: "); 

let demoraEnCamino = parseInt(horaIngreso) - horaSalidaCasa


console.log (`Hola ${nombre}, su ingreso se encuentra registrado a la hora ${horaIngreso}`);
console.log (`Has demorado ${demoraEnCamino} hs en llegar`)