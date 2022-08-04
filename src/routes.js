import { Router } from 'express'

import { getAllGames, addGame, addGames, getGame, deleteGame, updateGame } from './gamesCrud.js'

const routes = Router()

// ROTAS
// pcDoCitron = localhost:3000
// pcDoCitron == '/'
routes.get('/', (req, res) => {
  res.json({ message: 'Olá Citrones' })
})

// pcDoCitron/getGames == '/getGames'
// Variaveis nao obrigatorias = Query Params  ?
routes.get('/getGames', (request, response) => {
  const { orderBy } = request.query

  const allGames = getAllGames(orderBy) // ['jogo1', 'jogo2']

  response.status(200).json(allGames) // mando pra quem fez a requisicao o allGames
})

// adicionar um jogo || Create
routes.post('/addGame', (req, res) => {
  // Body da requisicao
  // {
  //   "game": "warframe"
  //   ... 5 mil valores no json
  // }

  // achar o jogo
  //   const nomeDoJogo = req.body.game
  //   const valorDoJogo = req.body.valor
  // Destructuring do JavaScript
  const { game } = req.body

  // adicionar o jogo na lista
  try {
    addGame(game)
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message
    })

    //return || break || die || exit
  }

  // retorna um Ok ou o Jogo Criado
  res.status(201).json(game)
})

// add varios jogos
routes.post('/addGames', (req, res) => {
  //achar os jogos
  const { games } = req.body

  //executar a funçao de adc
  addGames(games)
  res.status(201).json(games)
})

// busca 1 jogo especifico
// :index torna ele uma variavel = Request Params
routes.get('/games/:index', (req, res) => {
  const { index } = req.params

  const jogo = getGame(index)

  res.status(200).json(jogo)
})

// DELETE
routes.delete('/games/:index', (req, res) => {
  const { index } = req.params

  const deletarJogo = deleteGame(index)

  res.json({'message': `Jogo ${deletarJogo} Deletado`})
})
de

// UPDATE
routes.put('/games/:index', (req, res) => {
  // qual objeto mudar
  const { index } = req.params
  
  // achar o objeto a ser mudado
  // let jogo = getGame(index)

  const newJogo = req.body.game

  // modificar o objeto
  const updatedGame = updateGame(index, newJogo)

  // enviar o objeto modificado
  res.json(updatedGame)
})


// export default routes
export { routes }


