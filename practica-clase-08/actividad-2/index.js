alert("bienvenidos a mi sitio!");

let confirmacion = confirm("estas seguro de querer avanzar?");

termina = document.querySelector(".termina");

if (confirmacion == false) {termina.innerHTML = "“Lamentamos que no quieras continuar tu visita por este sitio increíble."}

else if (confirmacion == true) {termina.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!"}; 

nombre = prompt("cual es tu nombre?");

saludo = document.querySelector(".sigue");
saludo.innerHTML = "bienvenido" + nombre;

edad = prompt("cual es tu edad?");
if (edad <18){ 
    acceso= ("prohibido su acceso");
}
else if (edad >= 18 ) {
    acceso = alert("permitido su acceso");
}
oscuro = confirm ("desea ultilizar el modo oscuro?");
if (oscuro == true) cuerpo.style.backgroundcolor = "dimgray"; cuerpo.style.backgroundcolor = "white";
 

 diaDeSemana = ("domingo");
 if (diaDeSemana= "domingo") {
    alert("¡Hoy es día de descanso!")
 };
