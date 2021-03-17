import mongoose, { Schema } from 'mongoose'

import Project from '../models/project.interface'


const ProjectSchema = new Schema({
    name: String,
    const: Number
})

const ProjectModel = mongoose.model<Project>('Project', ProjectSchema)

export default ProjectModel