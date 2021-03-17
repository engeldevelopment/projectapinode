import dotenv from 'dotenv'

dotenv.config()

import './config/db'

import app from './app'

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Running in the port ${PORT}`)
})