const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector('.btn-copiar');
btnCopiar.style.display = "none"
const borrar = document.querySelector('.borrar');
borrar.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector(".textArea").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);

    if(textoEscrito===''){
        alert('No se a introducido ningun texto.');
        return true;
    }
    if (!validador || validador.length === 0) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        location.reload();
        return true;
      }
}
function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        btnCopiar.style.display = "block"
        borrar.style.display = "block"
    }
}
function encriptar(encriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encriptar = encriptar.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(encriptar.includes(matrizCodigo[i][0])){
            encriptar = encriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return encriptar
}




function btnDesencriptar(){
    if(!validarTexto()) {
        const textoEncriptado = desencriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        btnCopiar.style.display = "block"
        borrar.style.display = "block"
    }
}
function desencriptar(desencriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    desencriptar = desencriptar.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(desencriptar.includes(matrizCodigo[i][1])){
            desencriptar = desencriptar.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return desencriptar
}

btnCopiar.addEventListener('click', function() {copiar();});
borrar.addEventListener('click', function() {limpiar();});

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
}

function limpiar() {
    textArea.value = ""
}


function cambiarFondo() {
    document.body.style.backgroundImage = "url(imagenes/xd.png)";
    document.body.style.backgroundSize = "contain";  // Establece el tamaño de la imagen de fondo
    document.body.style.backgroundPosition = "right bottom";  // Establece la posición de la imagen de fondo
    document.body.style.backgroundRepeat = "no-repeat";  // Evita que la imagen se repita
  }
  
document.getElementById("btnCambiarFondo").addEventListener("click", cambiarFondo);  