//Check off specific tasks by clicking on them
const allLis = $('li');
allLis.click(function (evt) {
	$(this).toggleClass('completed');
});

//Click on on the X to delete a task

let allSpans = $('li > span');
allSpans.click(function () {
	alert('you clicked on a span');
});

$('ul').click(() => {
	alert('you clicked on the ul');	
});
$('#container').click(() => {
	alert('you clicked on the .container');	
});
$('body').click(() => {
	alert('you clicked on the body');	
});

//#28 done