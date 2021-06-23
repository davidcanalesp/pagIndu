console.log('en el script');
const btnHamburguesa = document.getElementById('btnHamburguesa');
const sidebar = document.getElementById('sidebar');
const contenedor = document.getElementById('contenedor');


btnHamburguesa.addEventListener('click', ()=>{
    sidebar.classList.toggle ('active');
    contenedor.classList.toggle('active');
    btnHamburguesa.classList.toggle('active')
})