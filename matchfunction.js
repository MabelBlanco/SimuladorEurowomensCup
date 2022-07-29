import { groupATeams, groupBTeams, groupCTeams, groupDTeams } from "./fasedegrupos.js"

//Con esta funcion creamos el tablero digamos, es decir, el número
// de jornadas, de partidos por jornada y la plantilla para colocar
// el nombre de los equipos en local o visitante.
function schedule (arrayTeams) {
    const matches = []
    const numberofMatchDays = arrayTeams.length - 1
    const numberofMatchesforMatchDay = arrayTeams.length / 2

    for (let i = 0; i < numberofMatchDays; i++) {
        const matchDay = []
        for (let j = 0; j < numberofMatchesforMatchDay; j++) {
            const match = { home: 'home', away: 'away' }
            matchDay.push(match)
        }
        matches.push(matchDay)
    }

    return matches
}

// Con esta funcion añadiremos a la plantilla de partidos,
// los nombres de los equipos que jugarán en local.
// Cogeremos todos los nombres menos el último
function addLocalTeams (arrayTeams, matches) {
    //Primero nos quedamos solo con el nombre de los equipos
    const teamNames = []
    arrayTeams.map (team => teamNames.push (team.name))

    // Añadimos los nombres a local
    let index = 0

    matches.forEach(matchDay => {
        matchDay.forEach (match => {
            match.home = teamNames[index]
            index++
            
            if (index>(teamNames.length -2)) {
                index = 0
            }
        })
    })

}

// Con esta funcion añadiremos a la plantilla de partidos,
// los nombres de los equipos que jugarán en visitante.

function addAwayTeams (arrayTeams, matches) {

    //Primero nos quedamos solo con el nombre de los equipos
    const teamNames = []
    arrayTeams.map (team => teamNames.push (team.name))

    // Empezamos a repartir los equipos empezando por el último
    let index = (teamNames.length - 2)

    matches.forEach (matchDay => {
        matchDay.forEach ((match, indexMatch) => {
            if (indexMatch === 0) {
                match.away = teamNames [teamNames.length -1]
            }else {
                match.away = teamNames [index]
                index--
            }
            if (index < 0) {
                index = (teamNames.length - 2)
            }
        })
    })
    
}

// Jornadas de partidos para el grupo A
const matchesGroupA = schedule(groupATeams)
addLocalTeams (groupATeams, matchesGroupA)
addAwayTeams (groupATeams, matchesGroupA)

// Ahora mismo para acceder a cada partido debe ser con un doble índice
console.log (matchesGroupA[0][0])


