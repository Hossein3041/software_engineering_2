function init(){
document.getElementById("regist").addEventListener("click", Reg)
}
function Reg(){
const form = document.getElementById("myform");
continuebtn = document.getElementById("regist");
form.onsubmit = (event)=>{
  event.preventDefault();
}
continuebtn.onclick = () =>{
let xhr = new XMLHttpRequest();
  xhr.open("POST","Registrierung.php",true);
  xhr.onload = () =>{
  if(xhr.readyState==4 && xhr.status==200){
    document.getElementById("output").innerHTML= xhr.response;
  }
  }

let formdata = new FormData(form);
xhr.send(formdata);
}
}
window.onload=init
