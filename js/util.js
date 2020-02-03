


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
	$('#publicityModal').modal('show');
});

//LAUNCH MODALS
function launchModal(imageName) {
	$("#imgGeneralModal").attr("src", "img/modal/" + imageName + ".png");
	$('#generalModal').modal('show');
}

$('#imgGeneralModal').on('hidden.bs.modal', function () {
	$("#imgGeneralModal").attr("src", "");
});

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

