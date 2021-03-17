import { Request, Response } from 'express'

import Project from '../models/project.interface'
import ProjectModel from '../models/project.model'


class ProjectsAPIController {
    static async all(req: Request, resp: Response): Promise<void> {
        const data: Project[] = await ProjectModel.find()
        resp.json({"projects": data})
    }
}

export default ProjectsAPIController