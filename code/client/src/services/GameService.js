export const setUpPlayers = (playerNames) => {
    const players = playerNames.map((playerName, index) => {
        const player = playerName.replace(/\s/g, '');
        return {index: index, id: player, name: playerName, score: 0, active: false}
    })
    return players
}

export const getCPUPlayers = playerName => {
    const players = [playerName, "Myrlyl Blackfinger", "Grilthrum Smeltfoot", "Malnus Merryshatter", "Brytnyss Icebraid"]
    return players
}
