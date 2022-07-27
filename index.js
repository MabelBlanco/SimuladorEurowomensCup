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
const firstWinner = goalsMatch (selectedTeamsNames[0], selectedTeamsNames[3])
console.log (`Día 2 => ${selectedTeamsNames[2]} vs ${selectedTeamsNames[1]}`)
console.log (`-------------------------`)
const secondWinner = goalsMatch (selectedTeamsNames[2], selectedTeamsNames[1])
console.log (`Día 3 => ${selectedTeamsNames[4]} vs ${selectedTeamsNames[7]}`)
console.log (`-------------------------`)
const thirdWinner = goalsMatch (selectedTeamsNames[4], selectedTeamsNames[7])
console.log (`Día 4 => ${selectedTeamsNames[6]} vs ${selectedTeamsNames[5]}`)
console.log (`-------------------------`)
const fourthWinner = goalsMatch (selectedTeamsNames[6], selectedTeamsNames[5])



