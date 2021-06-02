import express from 'express'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  req.horaRequest = new Date().toISOString('DD-MM-YYYY HH:MM')
  next()
})

app.use('/status', (req, res) =>
  res.status(200).json({
    app: 'Express API',
    version: '1.0.0',
    timestamp: req.horaRequest,
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
  })
)

app.all('*', (req, res, next) => {
  next(
    new Error(
      `O endereço ${req.protocol}://${req.hostname}${req.originalUrl} não existe ou não pôde ser encontrado.`
    )
  )
})

export default app
