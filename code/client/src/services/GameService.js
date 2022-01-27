import {legalMove} from '../containers/GameContainer'

export const setUpCPUPlayers = (playerNames) => {
    const players = playerNames.map((playerName, index) => {
        const player = playerName.replace(/\s/g, '');
        if(index ===0) return{index: index, id: player, name: playerName, type : "human", score: 0, active: false}
        else return {index: index, id: player, name: playerName, type : "CPU", hand : [], score: 0, active: false}
    })
    return players
}

export const getCPUPlayers = playerName => {
    const players = [playerName, "Myrlyl Blackfinger", "Grilthrum Smeltfoot", "Malnus Merryshatter", "Brytnyss Icebraid"]
    return players
}

export const passTurn = (turn, turns) => {

    turns.push(turn);
    const nextTurn = turns.shift();

    return [nextTurn, turns]
}
 
export const checkForWin = (gridState, goldCardRef) => {
    return !gridState[goldCardRef[0]][goldCardRef[1]].flipped
}

export const winner = (player) => {
    window.alert(`${player.name} is the winner!`)
}

export const addScore = (players, name) => {
    let tempPlayers = players;
    for(const tempPlayer of tempPlayers){
        if(tempPlayer.name == name){
            tempPlayer.score = 5
        }
    }
    return tempPlayers
}