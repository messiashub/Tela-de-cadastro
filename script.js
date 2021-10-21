
/* "use strict" */

//index e index2
let $btn = document.querySelector(".fa-eye");
let $resp = document.querySelector("#resp")


$btn.addEventListener('click', () => {
    let $inputSenha = document.querySelector("#senha");
    if ($inputSenha.getAttribute("type") == 'password') {
        $inputSenha.setAttribute("type", "text")
    } else {
        $inputSenha.setAttribute("type", "password")
    }
})

let $btnEntrar = document.querySelector("#entrar");
$btnEntrar.addEventListener('click', function () {
    let $usuario = document.querySelector("#usuario");
    let $userLabel = document.querySelector("#userLabel");

    let $senha = document.querySelector("#senha");
    let $senhaLabel = document.querySelector("#senhaLabel");

    // PEGANDO A LISTA DE USUÁRIOS DO LOCALSTORAGE 
    // 1 criando um array vazio
    let $listaUser = [];

    // 2 criando um objeto somente com as propriedades que serão validadas
    let $uservalid = {
        nome: "",
        user: "",
        senha: ""
    };

    // 3 pegando lista de usuarios do localStorage
    $listaUser = JSON.parse(localStorage.getItem("listUser"))
    console.log($listaUser)
    console.log('erro')

    // 4 fazendo a validação
    $listaUser.forEach(item => {
        if ($usuario.value == item.$userCad && $senha.value == item.$senhaCad) {
            $uservalid = {
                nome: item.$nomeCad,
                user: item.$userCad,
                senha: item.$senhaCad,
            }
        }
    });
    if ($usuario.value == $uservalid.user && $senha.value == $uservalid.senha && $usuario.value != "") {
        // ser der certo  envia para esta página
        window.location.href = "http://127.0.0.1:5500/index3.html"

        // criando um token
        let $token = Math.random().toString(16).substr(2)+ Math.random().toString(16).substr(2);

        // eviando o token  para o localStorage
        localStorage.setItem("token",$token)
        console.log($token)

        localStorage.setItem('userLogado',JSON.stringify($uservalid))

    } else {
        $userLabel.setAttribute('style', "color:red");
        $usuario.setAttribute('style', "border-color:red");
        $senhaLabel.setAttribute('style', "color:red");
        $senha.setAttribute('style', "border-color: red");
        $resp.innerHTML = "Usuario ou senha incorretos";      
        $resp.setAttribute('style','color:red' );
        $usuario.focus();
    }

})


