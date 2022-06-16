

function mensajeAlerta(){

const d = new Date();
let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles','Jueves', 'Viernes', 'Sábado'];
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let nomsemana = dias [d.getDay() ];
let dia = d.getDate();
let mes = meses[ d.getMonth() ];
let año = d.getFullYear();
let hora = d.getHours();
let minutos = d.getMinutes();
let segundos = d.getSeconds();

alert(`Hoy es ${nomsemana} ${dia} de ${mes} del año ${año}, y son las ${hora} horas con ${minutos} minutos con ${segundos} segundos.`);

}

mensajeAlerta();
 

function mostrarCuenta(){
    
    let endYear = new Date("12/31/2022 23:59:59")
    let countDown = endYear.getTime()
    let fecha = new Date()
    let now = fecha.getTime()
    let distancia = countDown-now;
    let Dias = Math.floor(distancia/(1000*60*60*24))
    let Horas = Math.floor((distancia%(1000*60*60*24)/(1000*60*60)))
    let Minutos = Math.floor((distancia%(1000*60*60)/(1000*60)))
    let Segundos = Math.floor((distancia%(1000*60)/(1000)))

    document.getElementById("tiemporestante").innerHTML = Dias + "dias;" + Horas + "horas;" + Minutos + "minutos:" + Segundos + "segundos";
    setInterval(mostrarCuenta,1000);
}
mostrarCuenta();



