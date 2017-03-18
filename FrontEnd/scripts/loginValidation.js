function validateLoginForm() {
	var uname = document.forms["loginForm"]["uname"].value;
	var psw = document.forms["loginForm"]["psw"].value;
	if(uname == "") {
		alert("Username cannot be blank");
		return false;
	}
	if(psw == "") {
		alert("Password cannot be blank");
		return false;
	}
}