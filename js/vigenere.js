


function comprobarclavecifrado(){
	
	var clavecifrado  = document.getElementById("input-clave-cifrado").value;
	var mensaje = document.getElementById("input-mensaje-cifrado").value;
	var claveok = false;
	
	if(clavecifrado.length==0){
		document.getElementById("textoerror").lastChild.nodeValue = "Introduce una clave de cifrado";
		document.getElementById("errorclavecifrado").style.visibility="visible";
	}

	else if(clavecifrado.length> mensaje.length && mensaje.length > 0 ){
		document.getElementById("textoerror").lastChild.nodeValue = "La clave NO puede tener una longitud mayor que el mensaje a cifrar";
		document.getElementById("errorclavecifrado").style.visibility="visible";
	}
	else{
		document.getElementById("errorclavecifrado").style.visibility="hidden";
		claveok = true;
	}
	return claveok;
	
}




function cifrar(){
	if(comprobarclavecifrado()==true){
		var mensaje = document.getElementById("input-mensaje-cifrado").value;
		if(mensaje.length != 0){
			var clavecifrado  = document.getElementById("input-clave-cifrado").value;
			var salida = vigenere(mensaje, clavecifrado, "cifrar");
			document.getElementById("mensaje-cifrado").innerText = salida;
		}
		else {
			document.getElementById("textoerror").lastChild.nodeValue = "Introduce un mesaje a cifrar";
			document.getElementById("errorclavecifrado").style.visibility="visible";
		}
	}
	
}


function comprobarclavedescifrado(){
	
	var clavedescifrado  = document.getElementById("input-clave-descifrado").value;
	var mensaje = document.getElementById("input-mensaje-descifrado").value;
	var claveok = false;
	
	if(clavedescifrado.length==0){
		document.getElementById("textoerrordes").lastChild.nodeValue = "Introduce una clave de cifrado";
		document.getElementById("errorclavedescifrado").style.visibility="visible";
	}

	else if(clavedescifrado.length > mensaje.length && mensaje.length > 0){ //Pensar máx
		document.getElementById("textoerrordes").lastChild.nodeValue = "La clave NO puede tener una longitud mayor que el mensaje a descifrar";
		document.getElementById("errorclavedescifrado").style.visibility="visible";
	}
	else{
		document.getElementById("errorclavedescifrado").style.visibility="hidden";
		claveok = true;
	}
	return claveok;
	
}

function descifrar(){
	if(comprobarclavedescifrado()==true){
	
		var mensaje = document.getElementById("input-mensaje-descifrado").value;
		if(mensaje.length != 0){
			var clavecifrado  = document.getElementById("input-clave-descifrado").value;
			var salida = vigenere(mensaje, clavecifrado, "descifrar");
			document.getElementById("mensaje-descifrado").innerText = salida;
		}
		else {
			document.getElementById("textoerrordes").lastChild.nodeValue = "Introduce un mensaje a descifrar";
			document.getElementById("errorclavedescifrado").style.visibility="visible";
		}
	}
	
}


function vigenere(mensaje, clave, operacion){
	var salida="";
	var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	if (clave == null)
		clave = "";
	
	//Validamos clave
	clave = clave.toUpperCase();
	clave = clave.replace(/\s/g,'');
	//Validamos mensaje
	mensaje = mensaje.toUpperCase();
	mensaje = mensaje.replace(/\s/g,'');
		/*
		mensaje=mensaje.replace(/(À|Á|Â|Ã|Ä|Å|Æ)/gi,'A');
		mensaje=mensaje.replace(/(È|É|Ê|Ë)/gi,'E'); 
		mensaje=mensaje.replace(/(Ì|Í|Î|Ï)/gi,'I');
		mensaje=mensaje.replace(/(Ò|Ó|Ô|Ö)/gi,'O');
		mensaje=mensaje.replace(/(Ù|Ú|Û|Ü)/gi,'U');
		mensaje=mensaje.replace(/Ñ/gi,'N');
		
		clave=clave.replace(/(À|Á|Â|Ã|Ä|Å|Æ)/gi,'A');
		clave=clave.replace(/(È|É|Ê|Ë)/gi,'E'); 
		clave=clave.replace(/(Ì|Í|Î|Ï)/gi,'I');
		clave=clave.replace(/(Ò|Ó|Ô|Ö)/gi,'O');
		clave=clave.replace(/(Ù|Ú|Û|Ü)/gi,'U');
		clave=clave.replace(/[Ñ]/, 'n');	*/	
		
		//alert(clave);
	
	var tam_mensaje = mensaje.length;
	var tam_clave = clave.length;
	
	var numClave=0;	
	var num=0;
	
	while (num < tam_mensaje){
        if(numClave == tam_clave){
            numClave=0;
		}
		if(operacion == "cifrar")
			salida = salida +' '+ getLetra((getNumero(mensaje.charAt(num))+getNumero(clave.charAt(numClave)))%26);
		else
			salida = salida +' '+ getLetra((getNumero(mensaje.charAt(num))-getNumero(clave.charAt(numClave)))%26);
			
        numClave++;
		num++;
	}
	return salida;
}

function getNumero(c){
    var letraMay = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var dev, i;

    for(i=0; i<26; i++)
        if(c==letraMay.charAt(i))
            dev=i;		
	
    return dev;
}

function getLetra(num){
    var letra = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	if(num<0)
        num+=26;
		
    return letra.charAt(num);
}

