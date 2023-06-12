let escolherViagem = document.querySelector(".escolher-viagem");
    escolherViagem.addEventListener("click", () => {
        let conteinerViagem1 = document.querySelector(".conteinerViagem1");
        conteinerViagem1.classList.add("selecionado")
        console.log("Chegei")

    })
// Fazer menu lateral apareçer

let iconMenu = document.querySelector(".menu");
iconMenu.addEventListener("click" , () =>{
    let menuLateral = document.querySelector(".menu-lateral");
    menuLateral.classList.toggle("active")
    if (iconMenu.classList.contains("fa-bars")) {
        iconMenu.classList.remove("fa-bars")
        iconMenu.classList.add("fa-xmark")
    }
    else{
        iconMenu.classList.remove("fa-xmark")
        iconMenu.classList.add("fa-bars")
    }
})
let mudarTema = document.querySelector(".mudar-tema");
mudarTema.addEventListener("click" ,() => {
    let btnMudarTema = document.querySelector("span");
    let lua = document.querySelector(".fa-moon");
    btnMudarTema.classList.toggle("ativado")
    mudarTema.classList.toggle("ativado")
    
    lua.classList.toggle("fa-sun")

    let themaDark = document.querySelectorAll("")
    
})
