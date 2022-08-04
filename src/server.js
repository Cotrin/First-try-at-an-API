// EXPRESS

// REST
// GET      POST        PUT      DELETE
// Read     Create      Update   Delete
import express from 'express'

import { routes } from './routes.js'

const meuServidorParrudo = express()

// VOU MANDAR BODY NAS MINHAS REQS
meuServidorParrudo.use(express.json())

meuServidorParrudo.use(routes)

// expor uma porta do seu pc
const PORT = 3000
meuServidorParrudo.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
