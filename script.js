const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Animación al hacer scroll

const elementos = document.querySelectorAll(
".card,.producto-card,.beneficio,.receta-item"
);

const mostrar = () =>{

    elementos.forEach(el=>{

        const posicion = el.getBoundingClientRect().top;

        if(posicion < window.innerHeight-80){

            el.style.opacity="1";

            el.style.transform="translateY(0)";

        }

    });

};

elementos.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".6s";

});

window.addEventListener("scroll",mostrar);

mostrar();