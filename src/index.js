/*boton option1 screen1 que envia a screen2*/
document.getElementById("option1").addEventListener("click", functionTwo);
function functionTwo (){
	document.getElementById("screen1").style.display="none";
	document.getElementById("screen2").style.display="block";
}
/*boton option2 screen1 que envia a screen3*/
document.getElementById("option2").addEventListener("click", functionThree);
function functionThree(){
  document.getElementById("screen1").style.display="none";
  document.getElementById("screen3").style.display="block";
}

/*boton screen2 que codifica*/
document.getElementById("submit").addEventListener("click",encodeBtnn);
function encodeBtnn(){
let message=document.getElementById("texto").value; 
let offset=parseInt(document.getElementById("clave").value); 
let result= cipher.encode(offset,message);
	document.getElementById("cifrado").innerHTML = (result.toUpperCase());
}

/*boton screen3 que decodifica*/
document.getElementById("submit2").addEventListener("click",decodeBtnn);
function decodeBtnn(){
let message=document.getElementById("texto2").value; 
 let offset=parseInt(document.getElementById("clave2").value); 
 let result= cipher.decode(offset,message);
 document.getElementById("descifrado").innerHTML = (result.toUpperCase());
}

/*boton option3  que envia a screen2*/
document.getElementById("option3").addEventListener("click", functionFour);
function functionFour (){
document.getElementById("screen2").style.display="none";
	document.getElementById("screen1").style.display="block";
	cleanValues ();
}

document.getElementById("option4").addEventListener("click", functionFive);
function functionFive (){
document.getElementById("screen3").style.display="none";
	document.getElementById("screen1").style.display="block";
	cleanValues ();
}

const cleanValues = () =>{
    document.getElementById('clave').value = '';
    document.getElementById('texto').value = '';
    document.getElementById('clave2').value = '';
    document.getElementById('texto2').value = '';

};