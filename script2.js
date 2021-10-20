'use strict'

let $btn = document.querySelector(".fa-eye");
let $confirm= document.querySelector("#eye");
let $cadastrar = document.querySelector("#cadastrar");

let $nome = document.querySelector("#nome");
let $labelNome = document.querySelector("#labelNome");

let $usuario = document.querySelector("#usuario");
let $labelUsuario = document.querySelector("#labelUsuario");

let $senha = document.querySelector("#senha2");
let $labelSenha2 = document.querySelector("#labelSenha2")

let $confirmSenha = document.querySelector("#confirm-senha");
let $labelConfirmSenha = document.querySelector("#labelConfirm-senha");

$nome.addEventListener("keyup",()=>{
    if($nome.value.length <= 2){
        $labelNome.setAttribute("style","color:red");

    }else{
         $labelNome.setAttribute("style","color:green");

    }
})









$btn.addEventListener('click', ()=>{
    let $inputSenha2 = document.querySelector("#senha2");
    if($inputSenha2.getAttribute("type") == 'password'){
        $inputSenha2.setAttribute("type","text")
    }else{
        $inputSenha2.setAttribute("type","password")
    }
})



$confirm.addEventListener('click', ()=>{
    let $confirmSenha = document.querySelector("#confirm-senha");
    if($confirmSenha.getAttribute("type") == 'password'){
        $confirmSenha.setAttribute("type","text")

    }else{
        $confirmSenha.setAttribute("type","password")
    }
})


$cadastrar.addEventListener('click',()=>{
    alert("olá")
})
