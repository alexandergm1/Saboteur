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

export const cpuTurn = (cpuPlayer, grid, deck) => {
    const tempDeck = Object.assign([], deck);
    const tempCpu = Object.assign({}, cpuPlayer);
    const cpuPlayResult = cpuPlay(tempCpu.hand, grid);
    if(cpuPlayResult.length === 0){
        let randomIndex
        if(tempCpu.hand.length === 1) {
            randomIndex = 0
        } else {
            randomIndex = Math.floor(Math.random() * tempCpu.hand.length);
        }
        tempCpu.hand.splice(randomIndex, 1)
        tempCpu.hand.push(tempDeck[0])
        tempDeck.shift()
        return [tempCpu, grid, tempDeck]
    }

}


const cpuPlay = (hand, grid) => {
    return []
}

export const gridNeighbours = (row, col, gridState) => {
    let neighbours = []
    row = Number(row)
    col = Number(col)
    if (gridState[row - 1] !== undefined) {
      gridState[row - 1][col] !== undefined ? neighbours.push(Object.assign({}, gridState[row - 1][col])) : neighbours.push({})
    } else {
      neighbours.push({})
    }
    gridState[row][col + 1] !== undefined ? neighbours.push(Object.assign({}, gridState[row][col + 1])) : neighbours.push({})
    if (gridState[row + 1] !== undefined) {
      gridState[row + 1][col] !== undefined ? neighbours.push(Object.assign({}, gridState[row + 1][col])) : neighbours.push({})
    } else {
      neighbours.push({})
    }
    gridState[row][col- 1] !== undefined ? neighbours.push(Object.assign({}, gridState[row][col - 1])) : neighbours.push({})
    // [top, right, bottom, left]
    // console.log(neighbours)
    return neighbours
  }


  const neighboursEntries = (neighbours) => {
     //connects open or closed (true or false)
    let neighboursEntries = []
    // console.log(neighbours[0])
    // console.log(neighbours[1])
    // console.log(neighbours[2])
    // console.log(neighbours[3])
    if (Object.keys(neighbours[0]).length !== 0){
    neighbours[0].inverted ? neighboursEntries.push(neighbours[0].entries.top) : neighboursEntries.push(neighbours[0].entries.bottom)
    }else{neighboursEntries.push(null)}

    if (Object.keys(neighbours[1]).length !== 0){
    neighbours[1].inverted ? neighboursEntries.push(neighbours[1].entries.right) : neighboursEntries.push(neighbours[1].entries.left)
    }else{neighboursEntries.push(null)}

    if (Object.keys(neighbours[2]).length !== 0){
    neighbours[2].inverted ? neighboursEntries.push(neighbours[2].entries.bottom) : neighboursEntries.push(neighbours[2].entries.top)
    }else{neighboursEntries.push(null)}

    if (Object.keys(neighbours[3]).length !== 0){
    neighbours[3].inverted ? neighboursEntries.push(neighbours[3].entries.left) : neighboursEntries.push(neighbours[3].entries.right)
    }else{neighboursEntries.push(null)}

    // [top, right, bottom, left]
    // null for empty or boarder tiles
    // console.log(neighboursEntries)
    return neighboursEntries
  }

  // helper function for comparing arrays
  function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

  export const cardFitsNeighbours = (card, neighbours) => {
    let cardEntries = []
    if (card.inverted){
      cardEntries = [card.entries.bottom, card.entries.left, card.entries.top, card.entries.right]
    } else {
      cardEntries = [card.entries.top, card.entries.right, card.entries.bottom, card.entries.left ]
    }
    let resultNeighboursEntries = neighboursEntries(neighbours)

    
    // console.log(resultNeighboursEntries)
    // console.log(cardEntries)

    let results = []
    let i = 0
    for (let result of resultNeighboursEntries) {
      (result === null) ? results.push(true) : results.push(result === cardEntries[i])
      i += 1
    }
    // console.log(results)

    // console.log(arrayEquals(cardEntries, resultNeighboursEntries))


    return !results.includes(false)
  } 

  export const boarderTileCard = (gridRow, gridCol) => {
    for (let neighbour of gridNeighbours(gridRow, gridCol)){
    //   console.log(gridNeighbours(gridRow, gridCol))
      if (Object.keys(neighbour).length !== 0){
        // console.log(neighbour)
        if (neighbour["name:"].substring(0, 4) === "path" || neighbour["name:"].substring(0, 5) === "start") return true
      }
    }
    return false
  }

  export const checkIfMakesPath = (card, neighbours) => {
    let resultNeighboursEntries = neighboursEntries(neighbours)
    let cardEntries = []
    if (card.inverted){
      cardEntries = [card.entries.bottom, card.entries.left, card.entries.top, card.entries.right]
    } else {
      cardEntries = [card.entries.top, card.entries.right, card.entries.bottom, card.entries.left ]
    }

    let results = []
    let i = 0
    for (let result of resultNeighboursEntries) {
      (result === true && cardEntries[i] === true ) ? results.push(true) : results.push(false)
      i += 1
    }
    // console.log(results)
    return results.includes(true)
  }