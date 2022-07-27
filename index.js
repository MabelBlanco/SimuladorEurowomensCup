//Hago todas las importaciones de lo que voy a necesitar
import { arrayTeams, selectedTeams} from "./teams.js"

//Imprimo por pantalla el comienzo de la Eurocopa
console.log ("¡¡COMIENZAN LAS FASES ELIMINATORIAS DE LA EUROWOMEN CUP 2022!!")
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
console.log (`Primer Partido: ${selectedTeamsNames[0]} vs ${selectedTeamsNames[3]}`)
console.log (`Segundo Partido: ${selectedTeamsNames[2]} vs ${selectedTeamsNames[1]}`)
console.log (`Tercer Partido: ${selectedTeamsNames[4]} vs ${selectedTeamsNames[7]}`)
console.log (`Cuarto Partido: ${selectedTeamsNames[6]} vs ${selectedTeamsNames[5]}`)


