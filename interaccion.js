/*---- Interacción N° 1 ----*/

let menuOption, i;

menuOption = document.getElementsByClassName("acordeon__opcion");

/*
Inicializador: variable contadora de vueltas
i=0 --> 1° vuelta  // i=1 --> 2° vuelta  // i=2 --> 3° vuelta

Condición: que el ciclo dure 3 vueltas: menuOption.length = 3

Actualizador del contador: i++ incremento

*/

for(  i=0; i<menuOption.length  ;  i++){
    menuOption[i].addEventListener("click", function () {
        
        this.classList.toggle("active");     

    })
}




/*
for (i = 0; i < menuOption.length; i++) {

    console.log(`i=  ${i}`) 

    menuOption[i].addEventListener("click", function() {
        this.classList.toggle("active");     
        console.log(`Al dar click, i = ${i}`) 
    });

    console.log(`i=  ${i}`) 
}
console.log(`i=  ${i}`) 
*/
