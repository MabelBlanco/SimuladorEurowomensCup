// Con esta funcion ordenaremos la clasificacion de los equipos

export function sortTeamsByScore (arrayTeams) {
    arrayTeams.sort (function(teamA, teamB) {
        //primero por puntuación de mayor a menor
        if (teamA.points !== teamB.points) {
            return teamB.points - teamA.points
        }else {// en caso de ser la misma, los ordenaremos por diferencia de goles, de mayor a menor
            if (teamA.goalsDiff !== teamB.goalsDiff) {
                return teamB.goalsDiff - teamA.goalsDiff
            }else {//en caso de ser también la misma, los ordenaremos por orden alfabético, en este caso de menor a mayor.
                return teamA.name - teamB.name
            }
        }
    })
}

