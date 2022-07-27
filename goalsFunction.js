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
        return firstTeam
    }else {
        console.log (`* El Ganador es ${secondTeam} *\n`)
        return secondTeam
    }

}

