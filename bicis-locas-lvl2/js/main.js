function validateForm(){
	/* Escribe tú código aquí */
var elNombre = document.getElementById("name").value;
var elApellido = document.getElementById("lastname").value;
// var elEmail = document.getElementById("input-email");
var elPassword = document.getElementById("input-password").value;

if(elNombre == null || elNombre.length == 0 && elApellido == null || elApellido == 0){
	var errorNombre = document.createElement("span");
	var textError = document.createTextNode("Se debe llenar este campo");
	errorNombre.appendChild(textError);
	document.getElementsByTagName('div')[1].appendChild(errorNombre);
	document.getElementsByTagName('div')[2].appendChild(errorNombre);	
}


}

