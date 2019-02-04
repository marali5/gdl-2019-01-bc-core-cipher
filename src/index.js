function functionTwo (){
 pantalla1= document.getElementById("pantalla1").style.display="none";
 pantalla2=document.getElementById("pantalla2").style.display="block";
}

function functionThree(){
  pantalla1= document.getElementById("pantalla1").style.display="none";
  pantalla3=document.getElementById("pantalla3").style.display="block";
}


function encodeText(){ 
	let string = [];
	let code = [];
	let message = document.getElementById("texto").value; 
	let n = document.getElementById("clave").value; 
  	for(let i = 0; i < message.length; i++){ 
  	  string.push((message.charCodeAt(i))-65+n%26+65); 
      code.push(String.fromCharCode(string[i])); 
      }
      let newCode = code.join("");
      document.getElementById("cifrado").innerHTML = (newCode.toUpperCase());
  
      string = []; 
      code = []; 
}


function uncodeText(){ 
	let string =[];
 	let uncode = [];
	let message = document.getElementById("texto2").value; 
 	let n = document.getElementById("clave2").value; 
  for(let i = 0; i < message.length; i++){ 
  	  string.push((message.charCodeAt(i))+65-n%26-65); 
  	  uncode.push(String.fromCharCode(string[i])); 
      }
      let newCode = uncode.join("");
      document.getElementById("descifrado").innerHTML = (newCode.toUpperCase()); 
 
      string = []; 
      uncode = []; 
}