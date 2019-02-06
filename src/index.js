function functionTwo (){
 document.getElementById("pantalla1").style.display="none";
 document.getElementById("pantalla2").style.display="block";
}
document.getElementById("opcion1").addEventListener("click", functionTwo);

function functionThree(){
  document.getElementById("pantalla1").style.display="none";
  document.getElementById("pantalla3").style.display="block";
}
document.getElementById("opcion2").addEventListener("click", functionThree);


document.getElementById("submit").addEventListener("click",encodeBtnn);

function encodeBtnn(){
let message=document.getElementById("texto").value; 
	let n=parseInt(document.getElementById("clave").value); 
	let result= cipher.encode(n,message);
	document.getElementById("cifrado").innerHTML = (result.toUpperCase());

}

document.getElementById("submit2").addEventListener("click",decodeBtnn);

function decodeBtnn(){
let message=document.getElementById("texto2").value; 
 let n=parseInt(document.getElementById("clave2").value); 
 let result= cipher.decode(n,message);
 document.getElementById("descifrado").innerHTML = (result.toUpperCase());
}