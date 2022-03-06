//-----CONFIRMACIÓN DE EDAD EN LA VENTANA MODAL------

//APARICIÓN DEL MODAL CUANDO CARGA LA PÁGINA

cerrarModal = ()=> {
    modal.classList.add("cerrar-modal");
}

btn_si.addEventListener("click", cerrarModal);

btn_no.addEventListener("click", e => {
    window.location.href = "https://disfrutadeunconsumoresponsable.com";
})