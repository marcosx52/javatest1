let nombre = prompt("Ingresar Nombre")
let ingresarEdad = parseInt (prompt("Ingresar Edad"));
let year = 2022



let resultado;

for (let i = 1; i <= 10; i++) {
   resultado = ingresarEdad + 5; 
   resultadoYear = year - ingresarEdad;
   console.log("Bienvenido " + nombre +  " tu tienes " + ingresarEdad + " años, " + "dentro de 5 años tendras " + resultado + " años." + "Tu has nacido en " + resultadoYear + ".");
   alert(nombre + " tu has nacido en " + resultadoYear); if(i == 4){break;}
}

let cartel = true

while(cartel) {
    console.log("Felicitaciones " + nombre + " como eres mayor de edad estas habilitado para jugar en nuestro torneo!");
    alert("Felicitaciones " + nombre + " te esperamos en el Torneo!!!");

    if(i = 4) {
        cartel = false;
    }

} 

let dato = prompt("Dime Adios para no molestarte más!!!");

while(dato != "Adios") {
    dato = prompt("Dime Adios para no molestarte más!!!");
    alert("No te dejare ir sino me dices Adios!!!!");
}