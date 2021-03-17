import mongoose from 'mongoose'

const DB_URI = process.env.DB_URI

async function connect(): Promise<void> {
    const connection = await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(err => console.error('Ocurred an error', err))
    console.log(`Connected on ${connection}!`)
}

connect()