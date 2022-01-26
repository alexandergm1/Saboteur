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
 
