
window.cipher = {

encode :(n, message)=>{ 
  let string = [];
  let code = [];
  for (let i=0; i < message.length; i++) { 
   string.push((message.charCodeAt(i)-65+n)%26+65); 
    code.push(String.fromCharCode(string[i])); 
      }
      let newCode = code.join("");
      return newCode;

},
decode :(n, message)=>{ 
  let string = [];
  let uncode = [];
  for(let i = 0; i < message.length; i++){ 
  string.push((message.charCodeAt(i)+65-n)%26+65); 
  uncode.push(String.fromCharCode(string[i])); 
      }
      let newCode = uncode.join("");
      return newCode; 
},

   
  };