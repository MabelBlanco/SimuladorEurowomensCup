import { arrayTeams} from "./teams.js"
import { schedule, addLocalTeams, addAwayTeams } from "./matchfunction.js"

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