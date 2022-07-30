
function findTeamByName (name, array) {
    let teamObject = array.find( team => team.name === name )
    return teamObject
}

// Con esta funcion buscaremos a los equipos ganador y perdedor 
// y actualizaremos sus estadísticas
export function upResults (arrayTeams, match) {
    const arrayTeamsUp = arrayTeams
    // Miramos primero si ha habido empate
    if (match.draw === true){
        //Si lo hay
        const firstTeam = findTeamByName (match.firstTeam, arrayTeamsUp)
        firstTeam.points += 1
        firstTeam.gamesPlayed += 1
        firstTeam.gamesMatches += 1
        firstTeam.goalsFor += match.goalsFirst
        firstTeam.goalsAgainst += match.goalsSecond
        firstTeam.goalsDiff = firstTeam.goalsFor - firstTeam.goalsAgainst

        const secondTeam = findTeamByName (match.secondTeam, arrayTeamsUp)
        secondTeam.points += 1
        secondTeam.gamesPlayed += 1
        secondTeam.gamesMatches += 1
        secondTeam.goalsFor += match.goalsSecond
        secondTeam.goalsAgainst += match.goalsFirst
        secondTeam.goalsDiff = secondTeam.goalsFor - secondTeam.goalsAgainst

    } else {

        //Actualizamos al ganador
        const winner = findTeamByName (match.winner, arrayTeamsUp)
        winner.points += 3
        winner.gamesPlayed += 1
        winner.gamesWon += 1
        winner.goalsFor += match.goalsWinner
        winner.goalsAgainst += match.goalsLoser
        winner.goalsDiff = winner.goalsFor - winner.goalsAgainst

        // Actualizamos al perdedor
        const loser = findTeamByName (match.loser, arrayTeamsUp)
        loser.gamesPlayed += 1
        loser.gamesLost += 1
        loser.goalsFor += match.goalsLoser
        loser.goalsAgainst += match.goalsWinner
        loser.goalsDiff = winner.goalsFor - winner.goalsAgainst
    }

    return arrayTeamsUp
}

function showGroupStage (arrayTeams) {
    const showArrayTeams = []
    arrayTeams.forEach (team => {
        let teamObject = {name : team.name, points : team.points, }
    })
}