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
