export function goalsRandom () {
    let goals = Math.floor (Math.random() * 10)
    return goals
}

export function goalsMatch (firstTeam, secondTeam) {
    let goalsFirst = goalsRandom ()
    let goalsSecond = goalsRandom ()

    while (goalsFirst === goalsSecond) {
         goalsFirst = goalsRandom ()
         goalsSecond = goalsRandom ()
    }

    console.log (`${firstTeam} marcó ${goalsFirst} goles y ${secondTeam} marcó ${goalsSecond} goles`)

    if (goalsFirst > goalsSecond) {
        console.log (`* El Ganador es ${firstTeam} *\n`)
        return {winner : firstTeam, goalsWinner : goalsFirst, 
            loser : secondTeam, goalsLoser : goalsSecond}
    }else {
        console.log (`* El Ganador es ${secondTeam} *\n`)
        return {winner : secondTeam, goalsWinner : goalsSecond, 
            loser: firstTeam, goalsLoser : goalsFirst}
    }

}

export function goalsMatchGroupStage (firstTeam, secondTeam) {
    let goalsFirst = goalsRandom ()
    let goalsSecond = goalsRandom ()

    if (goalsFirst === goalsSecond) {
        console.log (`${firstTeam} marcó ${goalsFirst} goles y ${secondTeam} marcó ${goalsSecond} goles`)
        console.log (`El partido ha quedado en empate`)
        return {draw : true, "firstTeam" : firstTeam, "goalsFirst" : goalsFirst, 
        "secondTeam" : secondTeam, "goalsSecond" : goalsSecond}
    }else {

        console.log (`${firstTeam} marcó ${goalsFirst} goles y ${secondTeam} marcó ${goalsSecond} goles`)

        if (goalsFirst > goalsSecond) {
            console.log (`* El Ganador es ${firstTeam} *\n`)
            return {winner : firstTeam, goalsWinner : goalsFirst, 
                loser : secondTeam, goalsLoser : goalsSecond, draw : false}
        }else {
            console.log (`* El Ganador es ${secondTeam} *\n`)
            return {winner : secondTeam, goalsWinner : goalsSecond, 
                loser: firstTeam, goalsLoser : goalsFirst, draw: false}
        }}

}


