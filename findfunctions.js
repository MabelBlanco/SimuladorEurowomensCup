import { arrayTeams, selectedTeams} from "./teams.js"

function findTeamByName (name, array) {
    let teamObject = array.find( team => team.name === name )
    return teamObject
}

console.log (findTeamByName ("España", arrayTeams))