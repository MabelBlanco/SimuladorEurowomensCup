import { arrayTeams} from "./teams.js"
import { schedule, addLocalTeams, addAwayTeams } from "./matchfunction.js"
import { goalsMatchGroupStage } from "./goalsFunction.js"
import { upResults } from "./stadisticsfunction.js"
import { sortTeamsByScore } from "./sortfunction.js"

// Divido los equipos por grupos
const groupATeams = [...arrayTeams.filter (e => e.group === "A")]
const groupBTeams = [...arrayTeams.filter (e => e.group === "B")]
const groupCTeams = [...arrayTeams.filter (e => e.group === "C")]
const groupDTeams = [...arrayTeams.filter (e => e.group === "D")]


// Creamos la planificación de cada grupo

// Jornadas de partidos para el grupo A
const matchesGroupA = schedule(groupATeams)
addLocalTeams (groupATeams, matchesGroupA)
addAwayTeams (groupATeams, matchesGroupA)

// Jornadas de partidos para el grupo B
const matchesGroupB = schedule(groupBTeams)
addLocalTeams (groupBTeams, matchesGroupB)
addAwayTeams (groupBTeams, matchesGroupB)

// Jornadas de partidos para el grupo C
const matchesGroupC = schedule(groupCTeams)
addLocalTeams (groupCTeams, matchesGroupC)
addAwayTeams (groupCTeams, matchesGroupC)

// Jornadas de partidos para el grupo A
const matchesGroupD = schedule(groupDTeams)
addLocalTeams (groupDTeams, matchesGroupD)
addAwayTeams (groupDTeams, matchesGroupD)

//Imprimimos los nombres de los equipos por grupo
// y la programación de partidos
console.log (`Grupos y equipos`)
console.log (`================`)

console.log (`\nGRUPO A`)
console.log (`-------`)
groupATeams.forEach (team => console.log (team.name))

console.log (``)

matchesGroupA.forEach((matchDay, indexMatchDay) => {
    console.log (`Día ${indexMatchDay+1}:`)
    matchDay.forEach(match => {
        console.log (`- ${match.home} vs ${match.away}`)
    })
})

console.log (`\nGRUPO B`)
console.log (`-------`)
groupBTeams.forEach (team => console.log (team.name))

console.log (``)

matchesGroupB.forEach((matchDay, indexMatchDay) => {
    console.log (`Día ${indexMatchDay+1}:`)
    matchDay.forEach(match => {
        console.log (`- ${match.home} vs ${match.away}`)
    })
})

console.log (`\nGRUPO C`)
console.log (`-------`)
groupCTeams.forEach (team => console.log (team.name))

console.log (``)

matchesGroupC.forEach((matchDay, indexMatchDay) => {
    console.log (`Día ${indexMatchDay+1}:`)
    matchDay.forEach(match => {
        console.log (`- ${match.home} vs ${match.away}`)
    })
})

console.log (`\nGRUPO D`)
console.log (`-------`)
groupDTeams.forEach (team => console.log (team.name))

console.log (``)

matchesGroupD.forEach((matchDay, indexMatchDay) => {
    console.log (`Día ${indexMatchDay+1}:`)
    matchDay.forEach(match => {
        console.log (`- ${match.home} vs ${match.away}`)
    })
})

// JUGAMOS LOS PARTIDOS DE LA FASE DE GRUPOS 

console.log (`====================================`)
console.log (`=¡¡COMIENZA LA EUROWOMEN CUP 2022!!=`)
console.log (`====================================`)

// DÍA 1

console.log (`Día 1 - GRUPO A`)
console.log (`---------------`)

//Jugamos el partido y guardamos el resultado en match1Day1GroupA
const match1Day1GroupA = goalsMatchGroupStage (matchesGroupA[0][0].home, matchesGroupA[0][0].away)
//Actualizamos a los equipos con los resultados
upResults (groupATeams, match1Day1GroupA)
const match2Day1GroupA = goalsMatchGroupStage (matchesGroupA[0][1].home, matchesGroupA[0][1].away)
upResults (groupATeams, match2Day1GroupA)

//Ordenamos la clasificación
sortTeamsByScore (groupATeams)

//Imprimimos la tabla con los equipos actualizados y filtramos las propiedades que queremos ver
console.table ((groupATeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 1 - GRUPO B`)
console.log (`---------------`)

const match1Day1GroupB = goalsMatchGroupStage (matchesGroupB[0][0].home, matchesGroupB[0][0].away)
upResults (groupBTeams, match1Day1GroupB)
const match2Day1GroupB = goalsMatchGroupStage (matchesGroupB[0][1].home, matchesGroupB[0][1].away)
upResults (groupBTeams, match2Day1GroupB)

sortTeamsByScore (groupBTeams)

console.table ((groupBTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 1 - GRUPO C`)
console.log (`---------------`)

const match1Day1GroupC = goalsMatchGroupStage (matchesGroupC[0][0].home, matchesGroupC[0][0].away)
upResults (groupCTeams, match1Day1GroupC)
const match2Day1GroupC = goalsMatchGroupStage (matchesGroupC[0][1].home, matchesGroupC[0][1].away)
upResults (groupCTeams, match2Day1GroupC)

sortTeamsByScore (groupCTeams)

console.table ((groupCTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 1 - GRUPO D`)
console.log (`---------------`)

const match1Day1GroupD = goalsMatchGroupStage (matchesGroupD[0][0].home, matchesGroupD[0][0].away)
upResults (groupDTeams, match1Day1GroupD)
const match2Day1GroupD = goalsMatchGroupStage (matchesGroupD[0][1].home, matchesGroupD[0][1].away)
upResults (groupDTeams, match2Day1GroupD)

sortTeamsByScore (groupDTeams)

console.table ((groupDTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

//------------------------------------------------------------------------------------------------------
// DÍA 2

console.log (`Día 2 - GRUPO A`)
console.log (`---------------`)

const match1Day2GroupA = goalsMatchGroupStage (matchesGroupA[1][0].home, matchesGroupA[1][0].away)

upResults (groupATeams, match1Day2GroupA)
const match2Day2GroupA = goalsMatchGroupStage (matchesGroupA[1][1].home, matchesGroupA[1][1].away)
upResults (groupATeams, match2Day2GroupA)

sortTeamsByScore (groupATeams)

console.table ((groupATeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 2 - GRUPO B`)
console.log (`---------------`)

const match1Day2GroupB = goalsMatchGroupStage (matchesGroupB[1][0].home, matchesGroupB[1][0].away)
upResults (groupBTeams, match1Day2GroupB)
const match2Day2GroupB = goalsMatchGroupStage (matchesGroupB[1][1].home, matchesGroupB[1][1].away)
upResults (groupBTeams, match2Day2GroupB)

sortTeamsByScore (groupBTeams)

console.table ((groupBTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 2 - GRUPO C`)
console.log (`---------------`)

const match1Day2GroupC = goalsMatchGroupStage (matchesGroupC[1][0].home, matchesGroupC[1][0].away)
upResults (groupCTeams, match1Day2GroupC)
const match2Day2GroupC = goalsMatchGroupStage (matchesGroupC[1][1].home, matchesGroupC[1][1].away)
upResults (groupCTeams, match2Day2GroupC)

sortTeamsByScore (groupCTeams)

console.table ((groupCTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 2 - GRUPO D`)
console.log (`---------------`)

const match1Day2GroupD = goalsMatchGroupStage (matchesGroupD[1][0].home, matchesGroupD[1][0].away)
upResults (groupDTeams, match1Day2GroupD)
const match2Day2GroupD = goalsMatchGroupStage (matchesGroupD[1][1].home, matchesGroupD[1][1].away)
upResults (groupDTeams, match2Day2GroupD)

sortTeamsByScore (groupDTeams)

console.table ((groupDTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

//--------------------------------------------------------------------------------------------------------------
// DÍA 3

console.log (`Día 3 - GRUPO A`)
console.log (`---------------`)


const match1Day3GroupA = goalsMatchGroupStage (matchesGroupA[2][0].home, matchesGroupA[2][0].away)

upResults (groupATeams, match1Day3GroupA)
const match2Day3GroupA = goalsMatchGroupStage (matchesGroupA[2][1].home, matchesGroupA[2][1].away)
upResults (groupATeams, match2Day3GroupA)

sortTeamsByScore (groupATeams)

console.table ((groupATeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 3 - GRUPO B`)
console.log (`---------------`)

const match1Day3GroupB = goalsMatchGroupStage (matchesGroupB[2][0].home, matchesGroupB[2][0].away)
upResults (groupBTeams, match1Day3GroupB)
const match2Day3GroupB = goalsMatchGroupStage (matchesGroupB[2][1].home, matchesGroupB[2][1].away)
upResults (groupBTeams, match2Day3GroupB)

sortTeamsByScore (groupBTeams)

console.table ((groupBTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 3 - GRUPO C`)
console.log (`---------------`)

const match1Day3GroupC = goalsMatchGroupStage (matchesGroupC[2][0].home, matchesGroupC[2][0].away)
upResults (groupCTeams, match1Day3GroupC)
const match2Day3GroupC = goalsMatchGroupStage (matchesGroupC[2][1].home, matchesGroupC[2][1].away)
upResults (groupCTeams, match2Day3GroupC)

sortTeamsByScore (groupCTeams)

console.table ((groupCTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 3 - GRUPO D`)
console.log (`---------------`)

const match1Day3GroupD = goalsMatchGroupStage (matchesGroupD[2][0].home, matchesGroupD[2][0].away)
upResults (groupDTeams, match1Day3GroupD)
const match2Day3GroupD = goalsMatchGroupStage (matchesGroupD[2][1].home, matchesGroupD[2][1].away)
upResults (groupDTeams, match2Day3GroupD)

sortTeamsByScore (groupDTeams)

console.table ((groupDTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

//------------------------------------------------------------------------------------------------------
// UNA VEZ JUGADOS TODOS LOS PARTIDOS

//Seleccionamos a los 2 primeros de cada grupo para los play-offs

export const selectedTeams = [groupATeams [0], groupATeams [1], 
groupBTeams [0], groupBTeams[1], 
groupCTeams[0], groupCTeams[1], 
groupDTeams[0], groupDTeams [1]
]

