import mongoose from 'mongoose'

interface Project extends mongoose.Document {
    name: string,
    cost: number
}

export default Project