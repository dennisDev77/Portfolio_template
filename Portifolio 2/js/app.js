let btnMenu=document.getElementById("menuAbrir");
let mobile=document.getElementById("menuMobile")

btnMenu.addEventListener('click', ()=>{
    mobile.classList.add('abrir-menu')
})
mobile.addEventListener('click', ()=>{
    mobile.classList.remove('abrir-menu')
})