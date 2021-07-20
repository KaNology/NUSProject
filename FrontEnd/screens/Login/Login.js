$(document).ready(function() {
	$('#signinForm').validate({
		rules:{
      email: {
       required: true
     },
     password: {
       required: true
     }
   },
   messages:{
     email: {
      required: "Please enter your first name"
    },
    password: {
      required: "Please enter your password"
    }
  }

})
})