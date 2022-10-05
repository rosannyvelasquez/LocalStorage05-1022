let nombre, apellido, usuario, correo, direccion, ciudad


let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    Leerdata

})



function Leerdata(){
nombre = document.getElementById('firstName').value
apellido = document.getElementById('lastName').value
usuario = document.getElementById('username').value
correo = document.getElementById('email').value
direccion= document.getElementById('address').value
ciudad = document.getElementById('city').value

GuardarLocalStorage(nombre, apellido, usuario, correo, direccion, ciudad)
}

function GuardarLocalStorage(nombre, apellido, usuario, correo, direccion, ciudad){
localStorage.setItem('nombre',nombre)
localStorage.setItem('apellido',apellido)
localStorage.setItem('usuario',usuario)
localStorage.setItem('direccion',direccion)
localStorage.setItem('correo',correo)
}

function ExtraerData(){
    let norm = localStorage.getItem('nombre')
    alert('Bienvenido'.norm)
}
