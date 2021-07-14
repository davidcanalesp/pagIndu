//console.log('en el script');
/*sal({
    //threshold: 1,
    once: false
  });*/
  
const btnHamburguesa = document.getElementById('btnHamburguesa');
const sidebar = document.getElementById('sidebar');
const contenedor = document.getElementById('contenedor');
const encabezado = document.getElementById('encabezado');
const vinculo = document.getElementById('vinculo');
const linkHome= document.getElementById('linkHome');
const linkNosotros= document.getElementById('linkNosotros');
const linkServicios = document.getElementById('linkServicios');
const linkClientes = document.getElementById ('linkClientes');
const linkTestimonios = document.getElementById('linkTestimonios');
const linkEquipo = document.getElementById('linkEquipo');

btnHamburguesa.addEventListener('click', ()=>{
    sidebar.classList.toggle ('active');
    contenedor.classList.toggle('active');
    btnHamburguesa.classList.toggle('active');
});

window.addEventListener('scroll', ()=>{
    encabezado.classList.toggle('sticky', window.scrollY>0);
});

vinculo.addEventListener('click', ()=>{
    btnHamburguesa.click();
});

linkHome.addEventListener('click', ()=>{
    btnHamburguesa.click();
});

linkNosotros.addEventListener('click', ()=>{
    btnHamburguesa.click();
});

linkServicios.addEventListener('click', ()=>{
    btnHamburguesa.click();
});

linkClientes.addEventListener('click', ()=>{
    btnHamburguesa.click();
});

linkTestimonios.addEventListener('click', ()=>{
    btnHamburguesa.click();
});

linkEquipo.addEventListener('click', ()=>{
    btnHamburguesa.click();
});

sal({
    //threshold: 1,
    once: false
  });
