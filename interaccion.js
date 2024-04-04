/*---- Interacción N° 1 ----*/

let menuOption, i;

menuOption = document.getElementsByClassName("acordeon__opcion");
console.log(menuOption);


for(  i=0; i<menuOption.length  ;  i++){

    menuOption[i].addEventListener("click", function () {
        
        /* Efecto hover al hacer click */
        console.log(this.classList.contains("active"));
        this.classList.toggle("active");     

        /* Mostrar y Ocultar el panel debajo de cada opción */

        var panel = this.nextElementSibling;
        console.log(panel);
        console.log(panel.style);

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else{
            panel.style.display = "block"
        }
        /* Intercambiar íconos + y - */

        var icon = this.lastElementChild;
        console.log(icon);
        console.log(icon.classList);
        console.log(icon.classList[2]);
        console.log(icon.classList.contains("fa-plus"));

        if(icon.classList.contains("fa-plus")){
            console.log(icon.classList.contains("fa-plus"));
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus")
        } else{
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
        }

        }
    )
}


/*

        /*Prueba de  firstElementChild y comparación entre textContent e innerHTML */
        /*
        var name = this.firstElementChild;
        console.log(name);
        console.log(name.textContent);
        console.log(name.innerHTML);*/
        /* Fin de Prueba:  textContent e innerHTML dan la misma salida */

        /*


*/

