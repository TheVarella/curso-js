var a = window.document.getElementById('area')
a.addEventListener("click", clicar)
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseout", sair)
function clicar(){
    a.innerText = "Clicou! A cor mudou para vermelho"
    a.style.background = "red"
}
function entrar(){
    a.innerText = "Entrou! A cor mudou para roxo"
    a.style.background = "purple"
}
function sair(){
    a.innerText = "Saiu! A cor mudou para preto"
    a.style.background = "black"
}