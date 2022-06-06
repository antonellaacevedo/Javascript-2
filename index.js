
//¿Cuál es el promedio de edad de un curso?

 function Calcularedades() {
    let cA = parseInt(prompt("Indique cuantos alumnos registrará"));
    let eA; //edades de los alumnos
    let sA = 0; //Acumulador de las edades
    let n; //ciclo
    
    for(n=1; n<=cA; n++){
        eA= parseInt(prompt("Ingrese la edad del alumno" + " " + n));
        sA = sA + eA;  
    }
    console.log("El promedio de sus alumnos es de:" + " " + sA/cA + " " + "años");
}
Calcularedades();

