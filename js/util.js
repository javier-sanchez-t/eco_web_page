


$('section.awSlider .carousel').carousel({
 pause: "hover",
 interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
 $('section.awSlider > img').attr('src', bscn);
});

//LAUNCH PUBLICITY MODAL
$(window).on('load', function () {
 //$('#publicityModal').modal('show');
});

//LAUNCH MODALS
function launchModal(imageName) {
 $("#imgGeneralModal").attr("src", "img/modal/" + imageName + ".jpg");
 $('#generalModal').modal('show');
}

// ===== Scroll to Section ==== 
$('#INICIO_LINK').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#INICIO').offset().top
 }, 1500);
});

$('#ATENCION_VIAJERO_LINK').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#ATENCION_VIAJERO').offset().top
 }, 1500);
});

$('#ATENCION_VIAJERO_LINK_2').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#ATENCION_VIAJERO').offset().top
 }, 1500);
});

$('#TIENDAS_LINK').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#TIENDAS').offset().top
 }, 1500);
});

$('#TIENDAS_LINK_2').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#TIENDAS').offset().top
 }, 1500);
});

$('#HOSPEDAJE_LINK').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#HOSPEDAJE').offset().top
 }, 1500);
});

$('#HOSPEDAJE_LINK_2').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#HOSPEDAJE').offset().top
 }, 1500);
});

$('#RESTAURANTE_LINK').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#RESTAURANTE').offset().top
 }, 1500);
});

$('#RESTAURANTE_LINK_2').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#RESTAURANTE').offset().top
 }, 1500);
});

$('#AVENTURA_LINK').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#AVENTURA').offset().top
 }, 1500);
});

$('#AVENTURA_LINK_2').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#AVENTURA').offset().top
 }, 1500);
});

$('#RUMBOS_LINK').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#RUMBOS').offset().top
 }, 1500);
});

$('#RUMBOS_LINK_2').click(function () {
 $("html, body").delay(0).animate({
  scrollTop: $('#RUMBOS').offset().top
 }, 1500);
});


var bodyInfo = [
 {
  title: "LUCIÉRNAGAS",
  description: "Las luciérnagas se caracterizan por su capacidad de bioluminiscencia, alrededor de las 8pm comienza este espectáculo que la naturaleza nos regala, el cual dura 50 minutos aproximadamente, durante el recorrido por el bosque podrás vivir esta mágica experiencia."
 },
 {
  title: "RUTA PULQUERA",
  description: "Alguna vez te has preguntado, ¿cuál es el proceso de elaboración del delicioso pulque? Podrás descubrirlo en el recorrido de la Ruta Pulquera, el cual se realiza en uno de los ranchos magueyeros más importantes del mundo, donde conocerás el procedimiento de producción de la bebida de los dioses, así como la elaboración de productos derivados de la planta del maguey."
 },
 {
  title: "HACIENDA SIGLO XVlll",
  description: "Ubicada a 30 minutos del Santuario de la Luciérnaga, considerada como uno de los principales atractivos turísticos del estado de Hidalgo y dentro del Top 10 de las mejores haciendas del país, donde podrás transportarte en el tiempo y vivir un poco de la historia del México antiguo. TIEMPO APROXIMADO 2 HORAS."
 },
 {
  title: "NANACAMILPA MÁGICO",
  description: "Conoce Nanacamilpa, recorriendo las calles principales y los lugares emblemáticos, donde un guía te platicará sobre la historia de esta maravillosa ciudad. -TIEMPO APROXIMADO 1 HORA"
 },
 {
  title: "CAMPAMENTO KIKIPUNGA",
  description: "¿Te gusta la aventura? Conéctate con la naturaleza y contigo mismo en la área de Campamento Kikipunga en el Santuario de las Luciérnagas, invita a tu persona favorita y vivan la experiencia al máximo."
 },
 {
  title: "GOTCHA",
  description: "Vive la adrenalina al máximo en nuestro campo de batalla Águila, arma tu equipo y haz una estrategia para triunfar y divertirte al extremo. ¡El juego está por comenzar!"
 },
 {
  title: "TALLER PULQUERO",
  description: "¿Te gustaría realizar pulque curado? Nosotros te enseñamos todo!"
 },
 {
  title: "TALLER DE MERMELADAS",
  description: "Imagínate comer o venderle a tus vecinos mermelada 100% natural elaborada artesanalmente por ti mismo. ¡RIQUISIMO! Nosotros en taller de mermeladas te enseñaremos todo el procedimiento para elaborar tal mermelada."
 },
 {
  title: "MUSEO FOTOGRÁFICO",
  description: "Regresa al pasado y asómbrate con el surgimiento de Nanacamilpa y sus personajes históricos que marcaron el pasado para un gran presente."
 },
 {
  title: "FOGATA",
  description: "Con una Fogata obtendrás luz durante la noche y te mantendrá caliente, mientras comes bombones asados o bien un chocolate caliente y disfrutar de encantadores momentos con tus personas favoritas, cabe resaltar que la carga de madera proporcionada proviene de árboles secos listos para dar vida a unos nuevos."
 },
 {
  title: "CINEMA DE CAMPING",
  description: "Durante la noche podrás disfrutar de una de nuestras películas temáticas mexicanas al aire libre desde tu casa de campamento o espacio de fogata, como en un autocinema llenas de amor acción y aventura cabe resaltar que fueron grabadas varias de ellas en nuestras haciendas."
 },
 {
  title: "TALLER DE NIÑOS",
  description: "Deja que los más pequeños se diviertan en nuestro taller interactivo donde podrán realizar distintas actividades en un ambiente seguro y sobre todo divertido acompañados siempre de un instructor."
 },
 {
  title: "MUSEO DE LA LUCIÉRNAGA",
  description: "¿Te gustaría saber más sobre las Luciérnagas? En el museo interactivo “encuentros de luz” podrás conocer el hábitat de las Luciérnagas de la región así como aprender sobre sus cuidados en la reserva natural del Santuario de las Luciérnagas, Eco Reino Aventura."
 },
 {
  title: "RESTAURANTE CAFÉART",
  description: "En Caféart tú eres lo más importante, trabajamos bajo los estándares de calidad e higiene, con ricos platillos regionales preparados al momento e ingredientes frescos para deleitar los paladares de nuestros turistas todos días."
 },
 {
  title: "RESTAURANTE ARGOS",
  description: "Durante tus vacaciones no tiene que faltar la comida regional, Deléitate degustando los mejores platillos típicos de la región en su versión tradicional y exótica, en el mejor restaurante de Nanacamilpa Tlaxcala."
 },
 {
  title: "GLAMPING",
  description: "Duerme en el Santuario de las Luciernagas, en un hospedaje único para vivir una mágica experiencia bajo las estrellas; en una confortable cabaña con domo de cristal para observar el majestuoso cielo estrellado sin salir de ella después de caminar en el bosque acompañado de mágicos destellos de luz durante la noche."
 },
 {
  title: "CAMPAMENTO PREMIUM KIKIPUNGA",
  description: "Campamento ideal para disfrutar de la aventura y conectarse con la naturaleza hospedandose en el Santuario de las Luciérnagas, Eco Reino Aventura sin equipo, Nosotros proporcionamos el equipo ya instalado con las mejores comodidades para una noche mágica e inolvidable."
 },
 {
  title: "CABAÑAS RODANTES",
  description: "Hospédate en una confortable cabaña de Ladrillo en el Santuario de las Luciérnagas donde podrás disfrutar de la comodidad y privacidad para tu pareja o amigos."
 },
 {
  title: "HOTEL ARGOS",
  description: "Si decides alojarte en Hotel Argos disfrutaras de una magnífica ubicación en Nanacamilpa Tlaxcala, estarás a tan solo 3 minutos caminando del zócalo del municipio y a 15 minutos en auto del Santuario de las Luciérnagas, Eco Reino Aventura (5 Kilómetros) además podrás disfrutar de Restaurante, Bar y fuente de sodas en el mismo lugar con servicio a la habitación disfruta de unas mágicas vacaciones."
 },
 {
  title: "HOTEL CAMPESTRE",
  description: "Si lo tuyo es la comodidad debes hospedarte en Hotel Campestre, disfrutaras de bellos paisajes urbanos a la vez que te encontrarás ubicado a tan solo 5 minutos en auto del zócalo de la ciudad de Nanacamilpa Tlaxcala y a 20 minutos (6 kilómetros) del Santuario de las Luciérnagas Eco Reino Aventura donde vivirás mágicas experiencias."
 },
 {
  title: "MAS HOTELES",
  description: "Es una práctica opción para hospedarte en un lugar inolvidable y disfrutar de grandes experiencias con tu familia o amigos con Eco Reino Aventura, Santuario de las Luciernagas ubicado a tan solo 3 minutos a pie del Zócalo de la ciudad de Nanacamilpa Tlaxcala y a 15 minutos del Santuario de las Luciérnagas."
 },
 {
  title: "TIENDA MÁGICA",
  description: "¡Recuerda a Nanacamilpa por siempre! con un recuerdo elaborado por artesanos de la región además podrás adquirir productos originales del Santuario de las Luciérnagas, Eco Reino Aventura como llaveros, sudaderas, gorras, playeras, impermeables y más. HORARIO: 10:00 AM – 11:00 PM"
 },
 {
  title: "TIENDA EL VENADO",
  description: "Disfruta tu estancia en el Santuario de las Luciérnagas, sin preocupaciones en nuestra tiendita de abarrotes podrás encontrar productos originales como Herramientas básicas, Galletas, Dulces, Bebidas, Desechables biodegradables, y productos de primera necesidad. ¡Vive Momentos Mágicos en Eco Reino Aventura! HORARIO: 10:00 AM – 11:00 PM"
 }
];

$(function () {
 for (var i = 0; i < bodyInfo.length; i++) {
  $("#TITLE_" + i).text(bodyInfo[i].title);
  $("#DES_" + i).text(bodyInfo[i].description.substring(0, 120) + "...");
 }
});

function launchDescriptionModal(index) {
 $("#descriptionModalCenterTitle").text(bodyInfo[index].title);
 $("#descriptionModalCenterBody").text(bodyInfo[index].description);

 $('#descriptionModal').modal('show');
}



/*SEND EMAIL*/
// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
 ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
  textbox.addEventListener(event, function () {
   if (inputFilter(this.value)) {
    this.oldValue = this.value;
    this.oldSelectionStart = this.selectionStart;
    this.oldSelectionEnd = this.selectionEnd;
   } else if (this.hasOwnProperty("oldValue")) {
    this.value = this.oldValue;
    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
   }
  });
 });
}

// Install input filters.
setInputFilter(document.getElementById("cantidad"), function (value) {
 return /^-?\d*$/.test(value);
});

setInputFilter(document.getElementById("noReservacion"), function (value) {
 return /^-?\d*$/.test(value);
});

function clearModalFacturacion() {
 document.getElementById("noReservacion").value = '';
 document.getElementById("fechaReservacion").value = '';
 document.getElementById("cantidad").value = '';
 document.getElementById("rfc").value = '';
 document.getElementById("extranjero").checked = false;
}

function sendFacturasForm() {
 var noReservacion = document.getElementById("noReservacion").value;
 var fechaViaje = document.getElementById("fechaReservacion").value;
 var cantidad = document.getElementById("cantidad").value;
 var RFC = document.getElementById("rfc").value;
 var extranjero = document.getElementById("extranjero").checked;

 /*if (noReservacion != null && noReservacion != undefined && noReservacion != ""
     && fechaViaje != null && fechaViaje != undefined && fechaViaje != ""
     && cantidad != null && cantidad != undefined && cantidad != "") {

     return;
 }*/

 var bodyEmail = "<strong>No. Reservación:</strong> " + noReservacion + "<br/>" +
  "<strong>Fecha de viaje:</strong> " + fechaViaje + "<br/>" +
  "<strong>Cantidad:</strong> $" + cantidad;

 if (RFC != null && RFC != undefined && RFC != "") {
  bodyEmail += "<br/><strong>RFC:</strong> " + RFC;
 }

 if (extranjero) {
  bodyEmail += "<br/><strong>Extranjero: </strong> Sí";
 } else {
  bodyEmail += "<br/><strong>Extranjero: </strong> No";
 }

 Email.send({
  Host: "smtp.gmail.com",
  Username: "jefe10jav@gmail.com",
  Password: "javi10%st",
  To: 'jefe10jav@gmail.com',
  From: "jefe10jav@gmail.com",
  Subject: "Solicitud de facturación",
  Body: bodyEmail
 }).then(
  message => {
   $('#facturaModal').modal('hide')

   if (message == 'OK') {
    alert("Sus datos han sido enviados, en breve atenderemos su solicitud. \n\n ¡Gracias!");
   } else {
    alert("Ocurrió un error con su solicitud, inténtelo más tarde.");
   }
  }
 );
}