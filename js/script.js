let btnGet = document.querySelector(".btnGet");

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