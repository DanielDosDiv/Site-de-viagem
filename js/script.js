let btnGet = document.querySelector(".btnGet");
let login = document.querySelector(".BTN-SignIn");
let tetarNovamente = document.querySelector(".ok")
let opacidadeFundo = document.querySelector(".filter-opacidade");
let msgErro = document.querySelector(".mensagem-Erro");
let iconsMenuInferior = document.querySelectorAll(".nav-inferior .fa-solid")
login.addEventListener("click" , () =>{
    let password = document.getElementById("password").value;
    let user = document.getElementById("user").value;
    

    if (user == "user@gmail.com" && password == "user123"){
        window.location.href = 'home.html'
    }
    else{
        msgErro.classList.add("ativo")
        opacidadeFundo.classList.add("ativo")
        
    }
})
tetarNovamente.addEventListener("click", () => {
    msgErro.classList.remove("ativo")
    opacidadeFundo.classList.remove("ativo")
})

btnGet.addEventListener("click" , () =>{
    let span1 = document.querySelector(".span1");
    let span2 = document.querySelector(".span2");
    let containerLogin = document.querySelector(".paginaLogin")
    let conteiner = document.querySelector(".conteiner")
    span1.classList.toggle("desativado")
    conteiner.classList.toggle("desativar")
    span2.classList.toggle("ativado")
    containerLogin.classList.toggle("ativo")
    
})
