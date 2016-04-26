'use strict';

$(() => {
	$('.newItem').click(openNewItemModal);
	$('#submitNewItem').click(createNewItem);
	$('button.removeIt').click(removeThing);
	$('button.editIt').click(editThing);
})

function removeThing() {
	$(this).parent().parent().remove();
}

function editThing(e) {
	e.preventDefault();

	var myModal = $('#myModal');
	var room = $(this).parent('tr').find('td #sel1').html();
	var desc = $(this).parent('tr').find('td #description').html();
	var cat = $(this).parent('tr').find('td #sel2').html();
	var value = $(this).parent('tr').find('td #itemValue').html();
	$('#sel1', myModal).val(room);
	$('#description', myModal).val(desc);
	$('#sel2', myModal).val(cat);
	$('#itemValue, myModal').val(value);

	myModal.modal({ show: true });
	
}


function createNewItem(e) {
	e.preventDefault();

	var newItem = {
		
		roomID: parseInt($('#sel1').val()),
		description: $('#description').val(),
		category: $('#sel2').val(),
		itemValue: $('#itemValue').val()
		// roomVal: function(items){
		// 	for (var i = 0; i = items.length; i++) {
		// 		result += items;
		// 	}
		// 	return result;
		// }
		// catVal: function(itemValue) {

		// },
		// totalVal: function(itemValue) {

		// }
	}

	$('#description').val('');
	$('#itemValue').val('');

	$.post('/api/items', newItem)
		.done(() => {

			$('.table').append(newItem);

			$('#myModal').modal('hide');

			document.location.reload(true);
		})
		.fail(err => {
			console.error('ERROR creating new item', err);
		});
}

function openNewItemModal () {
	$('#myModal').modal({show: true});
}
