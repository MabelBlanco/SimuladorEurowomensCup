import shuffle from "./shufflefunction.js"

//Crearé un objeto para cada equipo con todas las metricas a 0, para ello utilizo la clase Teams
export class Teams {
    constructor (name, group){
        this.name = name
        this.group = group
        this.points = 0
        this.gamesPlayed = 0
        this.gamesWon = 0
        this.gamesLost = 0
        this.gamesMatches = 0
        this.goalsFor = 0
        this.goalsAgainst = 0
        this.goalsDiff = 0

    }
}

//En este array introducimos los nombres de los equipos que queremos que jueguen
export const arrayTeamsNames = ["Inglaterra", "Austria", "Noruega", "Irlanda del Norte",
"Alemania", "España", "Dinamarca", "Finlandia", 
"Suecia", "Paises Bajos", "Suiza", "Portugal",
"Francia", "Bélgica", "Islandia", "Italia"]

//Aquí es donde añadiré todos los equipos de clase Teams para
export const arrayTeams = []

//Con este for creo para cada nombre de equipo introducido el objeto de clase Team
// Cada 4 equipos cambiamos de grupo (A, B, C, D)
for (let i=0; i<arrayTeamsNames.length; i++){
    if (i<4) {
        let newTeam = new Teams (arrayTeamsNames[i], "A")
        arrayTeams.push (newTeam)
    }else if (i<8) {
        let newTeam = new Teams (arrayTeamsNames[i], "B")
        arrayTeams.push (newTeam)
    }else if (i<12) {
        let newTeam = new Teams (arrayTeamsNames[i], "C")
        arrayTeams.push (newTeam)
    }else if (i<16) {
        let newTeam = new Teams (arrayTeamsNames[i], "D")
        arrayTeams.push (newTeam)
    }
}
// Seleccionar 8 equipos de forma aleatoria

// Desordenamos equipos
arrayTeams.shuffle ()

// Seleccionamos 2 equipos aleatorios de cada grupo
export let selectedTeams = [
    ...arrayTeams.filter (e => e.group === "A").slice (0,2),
    ...arrayTeams.filter (e => e.group === "B").slice (0,2),
    ...arrayTeams.filter (e => e.group === "C").slice (0,2),
    ...arrayTeams.filter (e => e.group === "D").slice (0,2)
]

