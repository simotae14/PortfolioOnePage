// Creare un Dropdown menu per schermi piccoli

var $select = $('<select></select>');
$("nav").append($select);

$('nav a').each(function(){
	var $option = $("<option></option>");
	$select.append($option);
	$option.text($(this).text());
	$option.val($(this).attr('href'));
});


$button = $('<button>Go!</button>');
$("nav").append($button);

$button.click(function(){
	window.location =$select.val();
})


$("#gallery li img").click(function(){
	event.preventDefault();
	var src = $(this).attr('src');
	$($overlay).show();
	$($immagine).attr('src', src);
	$($immagine).attr('alt', $(this).attr('alt'));
	$($immagine).show();
	var testoTitolo = $(this).next().text();
	$titolo.text(testoTitolo);
});

// creo overlay
var $overlay = $('<div id="overlay"></div>');
var $immagine = $('<img>');
var $titolo = $('<p></p>');

$('body').append($overlay);
$overlay.append($immagine);
$overlay.append($titolo);

$overlay.click(function(){
	$(this).hide();
});


var terms = ["Web Designer", "Frontend Dev", "Web Developer", " Real Bergamasco", " Half Valtellinese"];

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
              .delay(2000).fadeOut(400, rotateTerm);
}
$(rotateTerm);

// animsition
$(".animsition").animsition({
	inClass: 'rotate-in',
	outClass: 'rotate-out',
	inDuration: 1500,
	outDuration: 1500,
	linkElement: 'a'
});