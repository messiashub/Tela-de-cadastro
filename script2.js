'use strict'

let $btn = document.querySelector(".fa-eye");
let $confirm = document.querySelector("#eye");
let $cadastrar = document.querySelector("#cadastrar");
let $resp = document.querySelector("#resp")

let $nome = document.querySelector("#nome");
let $labelNome = document.querySelector("#labelNome");
let $validNome = false;

let $usuario = document.querySelector("#usuario");
let $labelUsuario = document.querySelector("#labelUsuario");
let $validUsuario = false;

let $senha = document.querySelector("#senha2");
let $labelSenha2 = document.querySelector("#labelSenha2")
let $validSenha = false;

let $confirmSenha = document.querySelector("#confirm-senha");
let $labelConfirmSenha = document.querySelector("#labelConfirm-senha");
let $validConfirmSenha = false;

// VALIDANDO CAMPOS
$nome.addEventListener("keyup", () => {
    if ($nome.value.length <= 2) {
        $labelNome.setAttribute("style", "color:red");
        $labelNome.innerHTML = "<strong>insira pelo menos 3 caracteres</strong>"
        $nome.setAttribute("style", "border-color: red");
        $validNome = false;
        

    } else {
        $labelNome.setAttribute("style", "color:#00FEFE");
        $labelNome.innerHTML = "nome"
        $nome.setAttribute("style", "border-color: #00FEFE");
        $validNome = true;
    }
})

$usuario.addEventListener("keyup", () => {
    if ($usuario.value.length <= 4) {
        $labelUsuario.setAttribute("style", "color:red");
        $labelUsuario.innerHTML = "<strong>insira pelo menos 5 caracteres</strong>"
        $usuario.setAttribute("style", "border-color: red");
        $validUsuario = false;

    } else {
        $labelUsuario.setAttribute("style", "color: #00FEFE");
        $labelUsuario.innerHTML = "usuario"
        $usuario.setAttribute("style", "border-color: #00FEFE");
        $validUsuario = true;
    }
})

$senha.addEventListener("keyup", () => {
    if ($senha.value.length <= 5) {
        $labelSenha2.setAttribute("style", "color:red");
        $labelSenha2.innerHTML = "<strong>insira pelo menos 6 caracteres</strong>"
        $senha.setAttribute("style", "border-color: red");
        $validSenha = false;

    } else {
        $labelSenha2.setAttribute("style", "color: #00FEFE");
        $labelSenha2.innerHTML = "senha"
        $senha.setAttribute("style", "border-color: #00FEFE");
        $validSenha = true;
    }
})

$confirmSenha.addEventListener("keyup", () => {
    if ($confirmSenha.value != $senha.value || $senha.value != $confirmSenha.value) {
        $labelConfirmSenha.setAttribute("style", "color:red");
        $labelConfirmSenha.innerHTML = "<strong>Confirmar Senha *A senha não confere</strong>"
        $confirmSenha.setAttribute("style", "border-color: red");
        $validConfirmSenha = false;

    }/* else if($senha.value == ""){
        $labelConfirmSenha.innerHTML="Preencha o campo Senha primeiro"
    } */
    else {
        $labelConfirmSenha.setAttribute("style", "color: #00FEFE");
        $labelConfirmSenha.innerHTML = "Confirmar Senha"
        $confirmSenha.setAttribute("style", "border-color: #00FEFE");
        $validConfirmSenha = true;
    }
})









$btn.addEventListener('click', () => {
    let $inputSenha2 = document.querySelector("#senha2");
    if ($inputSenha2.getAttribute("type") == 'password') {
        $inputSenha2.setAttribute("type", "text")
    } else {
        $inputSenha2.setAttribute("type", "password")
    }
})



$confirm.addEventListener('click', () => {
    let $confirmSenha = document.querySelector("#confirm-senha");
    if ($confirmSenha.getAttribute("type") == 'password') {
        $confirmSenha.setAttribute("type", "text")

    } else {
        $confirmSenha.setAttribute("type", "password")
    }
})


$cadastrar.addEventListener('click', () => {
    if($validNome && $validUsuario && $validSenha && $validConfirmSenha ){
        $resp.setAttribute('style','color:#00FEFE');
        $resp.setAttribute('style','background-color:#103f6d66')
        $resp.innerHTML= "Cadastrando usuário..."

    }else{
        $resp.setAttribute('style','color:red')
        $resp.innerHTML="Preencha os campos"
    }
})
