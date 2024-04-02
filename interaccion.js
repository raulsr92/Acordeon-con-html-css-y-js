/*---- Interacción N° 1 ----*/

let menuOption, i;

menuOption = document.getElementsByClassName("acordeon__opcion");
console.log(menuOption);


for(  i=0; i<menuOption.length  ;  i++){

    menuOption[i].addEventListener("click", function () {
        
        /* Efecto hover al hacer click */
        this.classList.toggle("active");     

        /* Mostrar y Ocultar el panel debajo de cada opción */

        var panel = this.nextElementSibling;
        console.log(panel);

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else{
            panel.style.display = "block"
        }

        



    })
}





/*

*/
