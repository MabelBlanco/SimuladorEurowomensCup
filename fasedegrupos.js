import { arrayTeams} from "./teams.js"

// Divido los equipos por grupos
export const groupATeams = [...arrayTeams.filter (e => e.group === "A")]
export const groupBTeams = [...arrayTeams.filter (e => e.group === "B")]
export const groupCTeams = [...arrayTeams.filter (e => e.group === "C")]
export const groupDTeams = [...arrayTeams.filter (e => e.group === "D")]

//Imprimimos los nombres de los equipos por grupo
// y la programación de partidos
console.log (`Grupos y equipos`)
console.log (`================`)

console.log (`\nGRUPO A`)
console.log (`-------`)
groupATeams.forEach (team => console.log (team.name))

console.log (`\nGRUPO B`)
console.log (`-------`)
groupBTeams.forEach (team => console.log (team.name))

console.log (`\nGRUPO C`)
console.log (`-------`)
groupCTeams.forEach (team => console.log (team.name))

console.log (`\nGRUPO D`)
console.log (`-------`)
groupDTeams.forEach (team => console.log (team.name))