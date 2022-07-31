//Hago todas las importaciones de lo que voy a necesitar

// Al importar selectedTeams del archivo fasedegrupos.js, se ejecuta y se imprime
// todo lo que haya en el archivo fasedegrupos.js
import {selectedTeams} from "./fasedegrupos.js"
// En este caso solo hay funciones, por lo que no se imprime nada hasta que la funcion no es llamada
import {goalsMatch} from "./goalsFunction.js"
import { sortTeamsByScore } from "./sortfunction.js"
import { upResults } from "./stadisticsfunction.js"

//Imprimo por pantalla el comienzo del PlayOff
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
console.log (`Día 4 => ${selectedTeamsNames[0]} vs ${selectedTeamsNames[3]}`)
console.log (`-------------------------`)
const matchDay4 = goalsMatch (selectedTeamsNames[0], selectedTeamsNames[3])
upResults (selectedTeams, matchDay4)

console.log (`Día 5 => ${selectedTeamsNames[2]} vs ${selectedTeamsNames[1]}`)
console.log (`-------------------------`)
const matchDay5 = goalsMatch (selectedTeamsNames[2], selectedTeamsNames[1])
upResults (selectedTeams, matchDay5)

console.log (`Día 6 => ${selectedTeamsNames[4]} vs ${selectedTeamsNames[7]}`)
console.log (`-------------------------`)
const matchDay6 = goalsMatch (selectedTeamsNames[4], selectedTeamsNames[7])
upResults (selectedTeams, matchDay6)

console.log (`Día 7 => ${selectedTeamsNames[6]} vs ${selectedTeamsNames[5]}`)
console.log (`-------------------------`)
const matchDay7 = goalsMatch (selectedTeamsNames[6], selectedTeamsNames[5])
upResults (selectedTeams, matchDay7)

// PARTIDOS DE LA SEMIFINAL

console.log ("\n==COMIENZAN LAS SEMIFINALES==\n")

console.log (`Día 8 => ${matchDay4.winner} vs ${matchDay6.winner}`)
console.log (`-------------------------`)
const matchDay8 =  goalsMatch (matchDay4.winner, matchDay6.winner)
upResults (selectedTeams, matchDay8)

console.log (`Día 9 => ${matchDay5.winner} vs ${matchDay7.winner}`)
console.log (`-------------------------`)
const matchDay9 = goalsMatch (matchDay5.winner, matchDay7.winner)
upResults (selectedTeams, matchDay9)

// PARTIDO PARA DECIDIR EL TERCER Y CUARTO PUESTO

console.log ("\n==TERCER Y CUARTO PUESTO==\n")

console.log (`Día 10 => ${matchDay8.loser} vs ${matchDay9.loser}`)
console.log (`-------------------------`)
const matchDay10 = goalsMatch (matchDay8.loser, matchDay9.loser)
upResults (selectedTeams, matchDay10)

// PARTIDO DE FINAL

console.log ("\n==COMIENZA LA FINAL==\n")

console.log (`Día 11 => ${matchDay8.winner} vs ${matchDay9.winner}`)
console.log (`-------------------------`)
const matchDay11 = goalsMatch (matchDay8.winner, matchDay9.winner)
upResults (selectedTeams, matchDay11)

// CLASIFICACION

console.log (`LOS EQUIPOS SE HAN CLASIFICADO DE LA SIGUIENTE FORMA:`)
console.log (`-----------------------------------------------------\n`)

//Ordenamos los equipos según puntuación
sortTeamsByScore (selectedTeams)

console.table ((selectedTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`\nY el equipo ganador es...`)
console.log (`¡¡¡¡¡==${matchDay11.winner}==!!!!!`)

