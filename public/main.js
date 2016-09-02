'use strict';
function onSubmit(form){

	let data = {
		user: form.elements['user'].value,
		email: form.elements['email'].value	
	};

	request('/users', data);

	let result = 

	if(result=='100') {
		form.hidden = true;
	}
	console.log(data);

}

