class Usuario {
    constructor(username, password, email, telefono) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.telefono = telefono;
    }
}

var contador = localStorage.getItem("contador"); 
var usuarios;  
var stringUsuarios;
if(contador==null){  
   contador = 0;
   usuarios = [];
}else{
    stringUsuarios = localStorage.getItem("usuarios")
    usuarios = JSON.parse(stringUsuarios) 
}

if (contador == 0){ 
    llenarUsuarios(); 
    contador = contador + 1 
    localStorage.setItem("contador", contador);
}
function llenarUsuarios() {  
    var user1 = new Usuario("leon", "leo123","leon@hotmail.com", "1234561"); 
    var user2 = new Usuario("carlos", "car123","carlos@hotmail.com", "1234562"); 
    var user3 = new Usuario("david", "dav123","david@hotmail.com", "1234563");
    var user4 = new Usuario("betty", "bet123","vetty@hotmail.com", "1234564");

    usuarios.push(user1); 
    usuarios.push(user2); 
    usuarios.push(user3);
    usuarios.push(user4);
    var stringUsuarios = JSON.stringify(usuarios) 
    localStorage.setItem("usuarios", stringUsuarios);
}

function cargarUnUsuario() {
    var a = this.usuarios[2];
    document.getElementById("username").setAttribute("value", a.username);
}

function Registrar() {
    var username = document.getElementById("usernamer").value; 
    var password = document.getElementById("passwordr").value;
    var email = document.getElementById("emailr").value; 
    var telefono = document.getElementById("telefonor").value;
    var usuario=new Usuario(username,password,email,telefono);  
    usuarios.push(usuario); 
    var stringUsuarios = JSON.stringify(usuarios)  
    localStorage.setItem("usuarios", stringUsuarios);
    document.getElementById("usernamer").value =""; 
    document.getElementById("passwordr").value ="";
    document.getElementById("emailr").value =""; 
    document.getElementById("telefonor").value ="";

    alert("Estas registrado en nuestra base de datos Bienvenido");
}

function verificarLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value; 
    usuarios.forEach(user => { 
        if(user.username == username && user.password == password){ 
            location.href="index.html";
        }
        else{
            document.getElementById("mensajeErrorLogin").style.visibility="visible";
        }
    });
}