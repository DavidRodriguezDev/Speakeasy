
const btn = document.querySelector(".btn");
const menu = document.querySelector(".navegador");
const flecha = document.querySelector(".flecha");
const modal = document.querySelector(".modal-edad");
const btn_si = document.querySelector(".btn-si");
const btn_no = document.querySelector(".btn-no");


//-----TRANSICIÓN BOTÓN HAMBURGUESA-----


transicionHamburguesa = ()=> {
    btn.classList.toggle("open");
}

btn.addEventListener("click", transicionHamburguesa);


//-----ACTIVACIÓN MENÚ------


activacionMenu = ()=> {
    menu.classList.toggle("active");
}

btn.addEventListener("click", activacionMenu);


//-----OCULTAR MENÚ HACIENDO SCROLL------


ocultarMenuScroll = ()=> {
    let currentScroll = window.scrollY;
    if(currentScroll > 0) {          
        menu.classList.remove("active");
        btn.classList.remove("open");  //Animación del icono hamburguesa.
    } 
}

window.addEventListener("scroll", ocultarMenuScroll);


//-----SCROLL AL INCIO DE LA PÁGINA CON LA FLECHA------


inicioPagina = ()=> {
    window.scroll(0,0);
}

flecha.addEventListener("click", inicioPagina);


//------APARICIÓN DE LA FLECHA EN EL PUNTO "Y" DE 909.5 (CUANDO EMPIEZAN A APARECER LAS SECCIONES)--------


flechaInvisible = ()=> {
    flecha.classList.add("desaparecer");
}

document.addEventListener("DOMContentLoaded", flechaInvisible); //Cuando cargue la página la flecha estará desaparecida


flechaVisible = ()=> {
    let y = window.scrollY;
    if (y < 909.5) {
        flecha.classList.add("desaparecer");
    } else {
        flecha.classList.remove("desaparecer")
    }
}

window.addEventListener("scroll", flechaVisible);



