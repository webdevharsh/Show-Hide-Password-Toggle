let input = document.querySelector('.container input');
let eye = document.querySelector('.container span');

let passToggle =()=>{
 if(input.type === 'password'){
   input.type = 'text';
   eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
 }else{
   input.type = 'password' ;
   eye.innerHTML = '<i class="fa-solid fa-eye"></i>'
 } 
}
