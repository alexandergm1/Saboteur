export const setUpPlayers = (playerNames, ) => {
    const players = playerNames.map((playerName) => {
        return {name: playerName, score: 0}
    })
    return players
}


