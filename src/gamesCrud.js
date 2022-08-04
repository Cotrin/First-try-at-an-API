// BANCO DE DADOS CHUMBADO NO CODIGO
const games = ['Destiny 2', 'Apex omegaLuL', 'Deep Rock Galactic']

function getAllGames(orderBy) {
  if (orderBy) {
    switch (orderBy) {
      case 'alfabetico':
        const novoArray = [...games]

        return novoArray.sort((a, b) => a.localeCompare(b))
    }
  }

  return games
}

function addGame(game) {
  if (!game || typeof game !== 'string') {
    throw new Error('Game deve ser uma String')
  }

  if (games.includes(game)) {
    throw new Error('Game não deve ser repetido')
  }

  //   // CHANCE DE DAR RUIM
  //   if (Math.random() > .7) {
  //     throw new Error('Banco de dados explodiu e não salvou!')
  //   }

  games.push(game)
}

function addGames(newGames) {
  // newGames = [ 'WoW', 'Ori']

  newGames.forEach(praCadaJogo => {
    games.push(praCadaJogo)
  })
}

function getGame(index) {
  return games[index]
}

function deleteGame(index) {
  return games.splice(index, 1)
}

function updateGame(id, newGame){
  //reatribuiçao
  games[id] = newGame

  //retorna o jogo modificado
  return games[id]
}



export { getAllGames, addGame, addGames, getGame, deleteGame, updateGame }
