const boton = document.querySelector(".botonEjemplo");
const texto = document.querySelector(".textoEjemplo");

boton.addEventListener('click', ()=>{
    boton.style.width = `${variable}px`;
texto.style.color = 'red';
});
