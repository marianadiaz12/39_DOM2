function validateForm(){
	/* Escribe tú código aquí */
	var spans = document.getElementsByTagName("span");
	
	while(spans.length > 0){
		spans[0].parentElement.removeChild(spans[0]);
	}
	
	var reexp = /^[A-Z]/; //Expresión regular para primera letra mayuscula de nombre y apellido
	
	//Validación del nombre
	var elNombre = document.getElementById("name");
	if (elNombre.value == null || reexp.test (elNombre.value) == false){
		var span = document.createElement("span");
		span.innerHTML = "Debe ingresar nombre, 1ra letra en mayúsculas";
		elNombre.parentNode.appendChild(span);
	}
	
	//Validación del apellido
	var elApellido = document.getElementById("lastname");
	if (elApellido.value == null || reexp.test(elApellido.value) == false) {
		var span = document.createElement("span");
		span.innerHTML = "Debe ingresar apellido, 1ra letra en mayúsculas";
		elApellido.parentNode.appendChild(span);
	}

	//Validación del Email
	var elEmail = document.getElementById("input-email");
	//Expresión regular para validar el correo electronico
	var expemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (elEmail.value == null || expemail.test(elEmail.value) == false) {
		var span = document.createElement("span");
		span.innerHTML = "Ingresa un correo valido";
		elEmail.parentNode.appendChild(span);
	}
	
	//Validación de la contraseña
	var elPassword = document.getElementById("input-password");
	if (elPassword.value.length < 6)  {
		var span = document.createElement("span");
		span.innerHTML = "La contraseña debe tener al menos 6 caracteres";
		elPassword.parentNode.appendChild(span);
	}
	else if(elPassword.value == 123456){
		var span = document.createElement("span");
		span.innerHTML ="La contraseña no puede ser 123456";
		elPassword.parentNode.appendChild(span);
	}
	else if(elPassword.value == 098765 ){
		var span = document.createElement("span");
		span.innerHTML = "La contraseña no puede ser 098765";
		elPassword.parentNode.appendChild(span);
	}
	else if(elPassword.value == "password" ){
		var span = document.createElement("span");
		span.innerHTML = "La contraseña no puede ser password";
		elPassword.parentNode.appendChild(span);
	}

	//Validación de las opciones
	var elSelec = document.getElementsByTagName("select")[0];
	if (elSelec.value == "0") {
		var span = document.createElement("span");
		span.innerHTML = "Debes seleccionar una opción";
		elSelec.parentNode.appendChild(span);
	}

}