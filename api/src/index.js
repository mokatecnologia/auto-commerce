import app from './app'
import { nodeEnv, apiPort } from './config'

process.on('uncaughtException', (erro) => {
  console.log('🔥🔥🔥 Erro Nodejs: Uncaught Exception')
  console.log(erro.name, erro.message, erro.stack)
  // db.desconectar()
  process.exit(1)
})

// db.conectar()

const servidor = app.listen(apiPort || 3000, () => {
  console.log(
    `[App] Server running in ${nodeEnv} mode on http://localhost:${apiPort}`
  )
})

process.on('unhandledRejection', (erro) => {
  console.log('🔥🔥🔥 Erro Nodejs: Unhandled Rejection')
  console.log(erro.name, erro.message, erro.stack)
  servidor.close(() => {
    // db.desconectar()
    process.exit(1)
  })
})
