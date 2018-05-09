//Check off specific tasks by clicking on them
// const allLis = $('li');
// allLis.click(function (evt) {
// 	$(this).toggleClass('completed');
// });
let allUls = $('ul');
allUls.on('click', 'li', function () {
	$(this).toggleClass('completed');
})

//Click on on the X to delete a task

// let allSpans = $('li > span');
// allSpans.click(function (evt) {
// alert('you clicked on a span');
allUls.on('click', 'li > span', function (evt) {

	// console.log($(this));
	$(this).parent().fadeOut(500, () => {
		// console.log($(this));
		$(this).parent().remove();
	});
	evt.stopPropagation();//halt bubbling
});

let todoInput = $('input[type=text]');
todoInput.keypress(function (evt) {

	if (event.which === 13) {
		$('ul').append(`<li><span>X </span>${$(this).val()}</li>`);
		console.log();
		$(this).val('');
	}
})


// $('ul').click(() => {
// 	// alert('you clicked on the ul');
// });

// $('#container').click(() => {
// 	// alert('you clicked on the .container');
// });

// $('body').click(() => {
// 	// alert('you clicked on the body');
// });

// //#28 done