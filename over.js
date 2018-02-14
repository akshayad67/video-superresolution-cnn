
console.log("Here");

$(document).ready(function(){

	$('.bt_signup').click(function(){

		var data = {
			fname:$('.fname').val(),
			lname:$('.lname').val(),
			email:$('.email').val(),
			password:$('.password').val(),
			phno:$('.phno').val()
		};

		console.log(data);

		$.post('http://192.168.15.75:3000/signup',data,function(status){
			console.log(status);
		})

	});

});