//Hago todas las importaciones de lo que voy a necesitar
import { arrayTeams, selectedTeams} from "./teams.js"
import {goalsMatch} from "./goalsFunction.js"

//Imprimo por pantalla el comienzo de la Eurocopa
console.log ("----------------------------------------------------------------")
console.log (" ¡¡COMIENZAN LAS FASES ELIMINATORIAS DE LA EUROWOMEN CUP 2022!! ")
console.log ("----------------------------------------------------------------")

// Imprimimos los equipos seleccionados
const selectedTeamsNames = []
selectedTeams.map (
    team => selectedTeamsNames.push (team.name)
)

console.log("Los equipos seleccionados para esta fase son: \n")
console.log(`Grupo A: ${selectedTeamsNames[0]}, ${selectedTeamsNames[1]}`)
console.log(`Grupo B: ${selectedTeamsNames[2]}, ${selectedTeamsNames[3]}`)
console.log(`Grupo C: ${selectedTeamsNames[4]}, ${selectedTeamsNames[5]}`)
console.log(`Grupo D: ${selectedTeamsNames[6]}, ${selectedTeamsNames[7]}`)


// PARTIDOS DE CUARTOS DE FINAL

console.log ("\n==COMIENZAN LOS CUARTOS==\n")

// Imprimimos los partidos que se realizan y los resultados
console.log (`Día 1 => ${selectedTeamsNames[0]} vs ${selectedTeamsNames[3]}`)
console.log (`-------------------------`)
const firstWinnerQuarter = goalsMatch (selectedTeamsNames[0], selectedTeamsNames[3])
console.log (`Día 2 => ${selectedTeamsNames[2]} vs ${selectedTeamsNames[1]}`)
console.log (`-------------------------`)
const secondWinnerQuarter = goalsMatch (selectedTeamsNames[2], selectedTeamsNames[1])
console.log (`Día 3 => ${selectedTeamsNames[4]} vs ${selectedTeamsNames[7]}`)
console.log (`-------------------------`)
const thirdWinnerQuarter = goalsMatch (selectedTeamsNames[4], selectedTeamsNames[7])
console.log (`Día 4 => ${selectedTeamsNames[6]} vs ${selectedTeamsNames[5]}`)
console.log (`-------------------------`)
const fourthWinnerQuarter = goalsMatch (selectedTeamsNames[6], selectedTeamsNames[5])

// PARTIDOS DE LA SEMIFINAL

console.log ("\n==COMIENZAN LAS SEMIFINALES==\n")

console.log (`Día 5 => ${firstWinnerQuarter} vs ${thirdWinnerQuarter}`)
console.log (`-------------------------`)
const firstWinnerSemi = goalsMatch (firstWinnerQuarter, thirdWinnerQuarter)
var thirdWinnerSemi
if (firstWinnerSemi === firstWinnerQuarter) {
    thirdWinnerSemi = thirdWinnerQuarter
}else {
    thirdWinnerSemi = firstWinnerQuarter
   
}
console.log (`Día 6 => ${secondWinnerQuarter} vs ${fourthWinnerQuarter}`)
console.log (`-------------------------`)
const secondWinnerSemi = goalsMatch (secondWinnerQuarter, fourthWinnerQuarter)
var fourthWinnerSemi
if (secondWinnerSemi === secondWinnerQuarter) {
    fourthWinnerSemi = fourthWinnerQuarter
}else {
    fourthWinnerSemi = secondWinnerQuarter
}

// PARTIDO PARA DECIDIR EL TERCER Y CUARTO PUESTO

console.log ("\n==TERCER Y CUARTO PUESTO==\n")

console.log (`Día 7 => ${thirdWinnerSemi} vs ${fourthWinnerSemi}`)
console.log (`-------------------------`)
const thirdWinnerFinal = goalsMatch (thirdWinnerSemi, fourthWinnerSemi)
var fourthWinnerFinal
if (thirdWinnerFinal === thirdWinnerSemi) {
    fourthWinnerFinal = fourthWinnerSemi
    
}else {
    fourthWinnerFinal = thirdWinnerSemi
    
}

// PARTIDO DE FINAL

console.log ("\n==COMIENZA LA FINAL==\n")

console.log (`Día 8 => ${firstWinnerSemi} vs ${secondWinnerSemi}`)
console.log (`-------------------------`)
const firstWinnerFinal = goalsMatch (firstWinnerSemi, secondWinnerSemi)
var secondWinnerFinal
if (firstWinnerFinal === firstWinnerSemi) {
    secondWinnerFinal = secondWinnerSemi
    
}else {
    secondWinnerFinal = firstWinnerSemi
    
}

// CLASIFICACION

console.log (`LOS EQUIPOS SE HAN CLASIFICADO DE LA SIGUIENTE FORMA:`)
console.log (`-----------------------------------------------------\n`)

console.log (`${fourthWinnerFinal} ha quedado 4º`)
console.log (`${thirdWinnerFinal} ha quedado 3º`)
console.log (`${secondWinnerFinal} ha quedado 2º`)

console.log (`\nY el equipo ganador es...`)
console.log (`¡¡¡¡¡==${firstWinnerFinal}==!!!!!`)

