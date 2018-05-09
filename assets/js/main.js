//Check off specific tasks by clicking on them
let ul = $('ul');

ul.on('click', 'li', function () {
	$(this).toggleClass('completed');
})

//Click on on the X to delete a task
ul.on('click', 'li > span', function (evt) {
	$(this).parent().fadeOut(500, () => {
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
});