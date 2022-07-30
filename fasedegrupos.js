import { arrayTeams} from "./teams.js"
import { schedule, addLocalTeams, addAwayTeams } from "./matchfunction.js"
import { goalsMatchGroupStage } from "./goalsFunction.js"
import { upResults } from "./stadisticsfunction.js"

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

matchesGroupA.forEach((matchDay, indexMatchDay) => {
    console.log (`Día ${indexMatchDay+1}:`)
    matchDay.forEach(match => {
        console.log (`- ${match.home} vs ${match.away}`)
    })
})

console.log (`\nGRUPO B`)
console.log (`-------`)
groupBTeams.forEach (team => console.log (team.name))

matchesGroupB.forEach((matchDay, indexMatchDay) => {
    console.log (`Día ${indexMatchDay+1}:`)
    matchDay.forEach(match => {
        console.log (`- ${match.home} vs ${match.away}`)
    })
})

console.log (`\nGRUPO C`)
console.log (`-------`)
groupCTeams.forEach (team => console.log (team.name))

matchesGroupC.forEach((matchDay, indexMatchDay) => {
    console.log (`Día ${indexMatchDay+1}:`)
    matchDay.forEach(match => {
        console.log (`- ${match.home} vs ${match.away}`)
    })
})

console.log (`\nGRUPO D`)
console.log (`-------`)
groupDTeams.forEach (team => console.log (team.name))

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
//Imprimimos la tabla con los equipos actualizados y filtramos las propiedades que queremos ver
console.table ((groupATeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 1 - GRUPO B`)
console.log (`---------------`)

const match1Day1GroupB = goalsMatchGroupStage (matchesGroupB[0][0].home, matchesGroupB[0][0].away)
upResults (groupBTeams, match1Day1GroupB)
const match2Day1GroupB = goalsMatchGroupStage (matchesGroupB[0][1].home, matchesGroupB[0][1].away)
upResults (groupBTeams, match2Day1GroupB)

console.table ((groupBTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 1 - GRUPO C`)
console.log (`---------------`)

const match1Day1GroupC = goalsMatchGroupStage (matchesGroupC[0][0].home, matchesGroupC[0][0].away)
upResults (groupCTeams, match1Day1GroupC)
const match2Day1GroupC = goalsMatchGroupStage (matchesGroupC[0][1].home, matchesGroupC[0][1].away)
upResults (groupCTeams, match2Day1GroupC)

console.table ((groupCTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 1 - GRUPO D`)
console.log (`---------------`)

const match1Day1GroupD = goalsMatchGroupStage (matchesGroupD[0][0].home, matchesGroupD[0][0].away)
upResults (groupDTeams, match1Day1GroupD)
const match2Day1GroupD = goalsMatchGroupStage (matchesGroupD[0][1].home, matchesGroupD[0][1].away)
upResults (groupDTeams, match2Day1GroupD)

console.table ((groupDTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

//------------------------------------------------------------------------------------------------------
// DÍA 2

console.log (`Día 2 - GRUPO A`)
console.log (`---------------`)

//Jugamos el partido y guardamos el resultado en match1Day1GroupA
const match1Day2GroupA = goalsMatchGroupStage (matchesGroupA[1][0].home, matchesGroupA[1][0].away)
//Actualizamos a los equipos con los resultados
upResults (groupATeams, match1Day2GroupA)
const match2Day2GroupA = goalsMatchGroupStage (matchesGroupA[1][1].home, matchesGroupA[1][1].away)
upResults (groupATeams, match2Day2GroupA)
//Imprimimos la tabla con los equipos actualizados y filtramos las propiedades que queremos ver
console.table ((groupATeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 2 - GRUPO B`)
console.log (`---------------`)

const match1Day2GroupB = goalsMatchGroupStage (matchesGroupB[1][0].home, matchesGroupB[1][0].away)
upResults (groupBTeams, match1Day2GroupB)
const match2Day2GroupB = goalsMatchGroupStage (matchesGroupB[1][1].home, matchesGroupB[1][1].away)
upResults (groupBTeams, match2Day2GroupB)

console.table ((groupBTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 2 - GRUPO C`)
console.log (`---------------`)

const match1Day2GroupC = goalsMatchGroupStage (matchesGroupC[1][0].home, matchesGroupC[1][0].away)
upResults (groupCTeams, match1Day2GroupC)
const match2Day2GroupC = goalsMatchGroupStage (matchesGroupC[1][1].home, matchesGroupC[1][1].away)
upResults (groupCTeams, match2Day2GroupC)

console.table ((groupCTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 2 - GRUPO D`)
console.log (`---------------`)

const match1Day2GroupD = goalsMatchGroupStage (matchesGroupD[1][0].home, matchesGroupD[1][0].away)
upResults (groupDTeams, match1Day2GroupD)
const match2Day2GroupD = goalsMatchGroupStage (matchesGroupD[1][1].home, matchesGroupD[1][1].away)
upResults (groupDTeams, match2Day2GroupD)

console.table ((groupDTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

//--------------------------------------------------------------------------------------------------------------
// DÍA 3

console.log (`Día 3 - GRUPO A`)
console.log (`---------------`)

//Jugamos el partido y guardamos el resultado en match1Day1GroupA
const match1Day3GroupA = goalsMatchGroupStage (matchesGroupA[2][0].home, matchesGroupA[2][0].away)
//Actualizamos a los equipos con los resultados
upResults (groupATeams, match1Day3GroupA)
const match2Day3GroupA = goalsMatchGroupStage (matchesGroupA[2][1].home, matchesGroupA[2][1].away)
upResults (groupATeams, match2Day3GroupA)
//Imprimimos la tabla con los equipos actualizados y filtramos las propiedades que queremos ver
console.table ((groupATeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 3 - GRUPO B`)
console.log (`---------------`)

const match1Day3GroupB = goalsMatchGroupStage (matchesGroupB[2][0].home, matchesGroupB[2][0].away)
upResults (groupBTeams, match1Day3GroupB)
const match2Day3GroupB = goalsMatchGroupStage (matchesGroupB[2][1].home, matchesGroupB[2][1].away)
upResults (groupBTeams, match2Day3GroupB)

console.table ((groupBTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 3 - GRUPO C`)
console.log (`---------------`)

const match1Day3GroupC = goalsMatchGroupStage (matchesGroupC[2][0].home, matchesGroupC[2][0].away)
upResults (groupCTeams, match1Day3GroupC)
const match2Day3GroupC = goalsMatchGroupStage (matchesGroupC[2][1].home, matchesGroupC[2][1].away)
upResults (groupCTeams, match2Day3GroupC)

console.table ((groupCTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 3 - GRUPO D`)
console.log (`---------------`)

const match1Day3GroupD = goalsMatchGroupStage (matchesGroupD[2][0].home, matchesGroupD[2][0].away)
upResults (groupDTeams, match1Day3GroupD)
const match2Day3GroupD = goalsMatchGroupStage (matchesGroupD[2][1].home, matchesGroupD[2][1].away)
upResults (groupDTeams, match2Day3GroupD)

console.table ((groupDTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

//-----------------------------------------------------------------------------------------------------------------------
// DÍA 4

console.log (`Día 4 - GRUPO A`)
console.log (`---------------`)

//Jugamos el partido y guardamos el resultado en match1Day1GroupA
const match1Day4GroupA = goalsMatchGroupStage (matchesGroupA[3][0].home, matchesGroupA[3][0].away)
//Actualizamos a los equipos con los resultados
upResults (groupATeams, match1Day4GroupA)
const match2Day4GroupA = goalsMatchGroupStage (matchesGroupA[3][1].home, matchesGroupA[3][1].away)
upResults (groupATeams, match2Day4GroupA)
//Imprimimos la tabla con los equipos actualizados y filtramos las propiedades que queremos ver
console.table ((groupATeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 4 - GRUPO B`)
console.log (`---------------`)

const match1Day4GroupB = goalsMatchGroupStage (matchesGroupB[3][0].home, matchesGroupB[3][0].away)
upResults (groupBTeams, match1Day4GroupB)
const match2Day4GroupB = goalsMatchGroupStage (matchesGroupB[3][1].home, matchesGroupB[3][1].away)
upResults (groupBTeams, match2Day4GroupB)

console.table ((groupBTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 4 - GRUPO C`)
console.log (`---------------`)

const match1Day4GroupC = goalsMatchGroupStage (matchesGroupC[3][0].home, matchesGroupC[3][0].away)
upResults (groupCTeams, match1Day4GroupC)
const match2Day4GroupC = goalsMatchGroupStage (matchesGroupC[3][1].home, matchesGroupC[3][1].away)
upResults (groupCTeams, match2Day4GroupC)

console.table ((groupCTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])

console.log (`Día 4 - GRUPO D`)
console.log (`---------------`)

const match1Day4GroupD = goalsMatchGroupStage (matchesGroupD[3][0].home, matchesGroupD[3][0].away)
upResults (groupDTeams, match1Day4GroupD)
const match2Day4GroupD = goalsMatchGroupStage (matchesGroupD[3][1].home, matchesGroupD[3][1].away)
upResults (groupDTeams, match2Day4GroupD)

console.table ((groupDTeams), ["name", "points", "goalsFor", "goalsAgainst", "goalsDiff"])
