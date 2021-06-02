import dotenv from 'dotenv'

dotenv.config()

let { error } = dotenv.config()

if (error) {
  throw error
}

export const apiPort = process.env.PORT
export const nodeEnv = process.env.NODE_ENV
