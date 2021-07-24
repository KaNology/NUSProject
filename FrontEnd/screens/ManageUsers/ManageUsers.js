$('.edit-button').click(function(event) {
	$('.profile-container').html(
		`
		<div class="row" style="display: flex; justify-content: space-between; padding: 0px 10px;">
		<h3>Edit User Profile</h3>
		<button type="button" class="back-button btn btn-primary">Back</button>
		</div>
		<hr noshade>

		<div class="row justify-content-center mb-3" style="position: relative;">
		<img src="https://th.bing.com/th/id/OIP.JQMcE7P-UnqjHJPCuebtBwHaE7?pid=ImgDet&rs=1" alt="Avatar" class="rounded" width="150" height="150">
		<button type="button" class="btn font-weight-bold" style="position: absolute; bottom: 10px; background-color: rgba(255,255,255,0.7);">CHANGE</button>
		</div>

		<form>
		<div class="form-group row justify-content-center">
		<label class="col-sm-2 col-form-label mb-n3 font-weight-bold">Basic Information</label>
		</div>

		<div class="form-group row justify-content-center">
		<label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label>
		<div class="col-sm-4">
		<input type="password" class="form-control" id="inputFirstName" placeholder="First Name">
		</div>
		</div>

		<div class="form-group row justify-content-center">
		<label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label>
		<div class="col-sm-4">
		<input type="password" class="form-control" id="inputLastName" placeholder="Last Name">
		</div>
		</div>

		<div class="form-group row justify-content-center">
		<label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
		<div class="col-sm-4">
		<input type="password" class="form-control" id="inputEmail" placeholder="someone@example.com">
		</div>
		</div>

		<div class="form-group row justify-content-center">
		<label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
		<div class="col-sm-4">
		<input type="password" class="form-control" id="inputPassword" placeholder="******">
		</div>
		</div>

		<div class="form-group row justify-content-center">
		<label for="gridCheck1" class="col-sm-2 col-form-label">Active?</label>
		<div class="col-sm-4">
		<input class="form-check-input" value="" type="checkbox" id="gridCheck1">
		</div>
		</div>

		<div class="form-group row justify-content-center">
		<button type="submit" class="btn btn-success">Save</button>
		</div>
		</form>
		`
		)
});