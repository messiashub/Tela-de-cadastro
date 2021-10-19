
"use strict"

//index e index2
let $btn = document.querySelector(".fa-eye");

$btn.addEventListener('click', ()=>{
    let $inputSenha = document.querySelector("#senha");
    if($inputSenha.getAttribute("type") == 'password'){
        $inputSenha.setAttribute("type","text")
    }else{
        $inputSenha.setAttribute("type","password")
    }
})

// index2
let $confirm = document.querySelector("#eye");
$confirm.addEventListener('click', ()=>{
    let $confimSenha = document.querySelector("#confirm-senha");
    if($confimSenha.getAttribute("type") == 'password'){
        $confimSenha.setAttribute("type","text")

    }else{
        $confimSenha.setAttribute("type","password")
    }
})

