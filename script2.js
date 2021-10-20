'use strict'

let $btn2 = document.querySelector(".fa-eye");

$btn2.addEventListener('click', ()=>{
    let $inputSenha2 = document.querySelector("#senha2");
    if($inputSenha2.getAttribute("type") == 'password'){
        $inputSenha2.setAttribute("type","text")
    }else{
        $inputSenha2.setAttribute("type","password")
    }
})

let $confir= document.querySelector("#eye");

$confir.addEventListener('click', ()=>{
    let $confimSenha = document.querySelector("#confirm-senha");
    if($confimSenha.getAttribute("type") == 'password'){
        $confimSenha.setAttribute("type","text")

    }else{
        $confimSenha.setAttribute("type","password")
    }
})
