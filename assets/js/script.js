/*
 Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let name = widow.document.getElementbyId("name")
let email = widow.document.getElementbyId("email")
let subject = widow.document.getElementbyId("subject")
let nomeOk = false
let emailOk = false
let subjectOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail () {
    let txtEmail = document.querySelector("#txtEmail") 
    
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
      txtEmail.innerHTML = "E-mail inválido"
      txtEmail.style.color = "red"
    }else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
    
}

function validaSubject () {
    let txtSubject = document.querySelector("#txtSubject")

    if(assunto.value.length >= 100) {
        txtSubject.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtSubject.style.color = "red"
        txtSubject.style.display = "block"
    }else {
        txtSubject.style.display = "none"
        subjectOk = true
    }
}

function Submit () {
    if (nomeOk == true && emailOk == true && subjectOk == true) {
        alert ("Formulário enviado com sucesso!")
    }else{
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "300px"
}