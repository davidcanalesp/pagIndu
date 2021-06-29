console.log('en el script');
const btnHamburguesa = document.getElementById('btnHamburguesa');
const sidebar = document.getElementById('sidebar');
const contenedor = document.getElementById('contenedor');
const encabezado = document.getElementById('encabezado');

btnHamburguesa.addEventListener('click', ()=>{
    sidebar.classList.toggle ('active');
    contenedor.classList.toggle('active');
    btnHamburguesa.classList.toggle('active');
});

window.addEventListener('scroll', ()=>{
    encabezado.classList.toggle('sticky', window.scrollY>0);
});