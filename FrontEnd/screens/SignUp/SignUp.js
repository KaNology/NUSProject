$(document).ready(function() {
	$('#registration').validate({
		rules:{
          //username is the name of the textbox
          firstname: {
          	required: true,
            maxlength: 25
          },
          lastname: {
          	required: true,
            maxlength: 25
          },
          email: {
            required: true,
            maxlength: 255
          },
          password: {
          	required: true,
          	minlength: 5,
            maxlength: 64
          },
          passwordConfirm: {
          	required: true,
          	minlength: 5,
            maxlength: 64,
          	equalTo: "#password"
          },
      },
      messages:{
      	firstname: {
      		required: "Please enter your first name",
          maxlength: "Your first name is too long"
      	},
      	lastname: {
      		required: "Please enter your last name",
          maxlength: "Your last name is too long"
      	},
        email: {
          required: "Please enter your email",
          maxlength: "Your first name is too long"
        },
      	password: {
      		required: "Please enter your password",
      		minlength: "Your password must be at least 5 characters long",
          maxlength: "Your password is too long"
      	},
      	passwordConfirm: {
      		required: "Please enter your password",
      		minlength: "Your password must be at least 5 characters long",
      		equalTo: "Password is not the same",
          maxlength: "Your password is too long"
      	},
      }

  })
})