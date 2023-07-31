function esAdulto(edad){
    return edad >= 18
}

let edadIngresada = +(prompt("Ingresá la edad de un participante:"))
let totalEdades = edadIngresada
let cantidadDePersonas = 1


while(edadIngresada != 0){
    edadIngresada = +(prompt("Ingresá la edad del siguiente participante:"))
    totalEdades += edadIngresada
    cantidadDePersonas++
}

const edadPromedio = totalEdades / cantidadDePersonas
console.log("Este es el promedio de edades de los participantes: " + edadPromedio)

if(esAdulto(edadPromedio)){
    console.log("La edad promedio de los participantes es mayor de edad")
    console.log("Por lo tanto pueden ingresar al sitio.")
}else{
    console.log("La edad promedio de los participantes es menor a 18")
    console.log("Por lo tanto NO pueden ingresar al sitio.")
}