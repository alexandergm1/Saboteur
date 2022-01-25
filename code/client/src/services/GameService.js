export const setUpPlayers = (playerNames, ) => {
    const players = playerNames.map((playerName) => {
        return {name: playerName, score: 0}
    })
    return players
}

export const getCPUPlayers = playerName => {
    const players = [playerName, "Myrlyl Blackfinger", "Grilthrum Smeltfoot", "Malnus Merryshatter", "Brytnyss Icebraid"]
    return players
}
