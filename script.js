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
