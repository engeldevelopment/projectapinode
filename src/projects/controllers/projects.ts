import {Request, Response} from 'express'
import Project from '../models/project.interface'


class ProjectsAPIController {
    static all(req: Request, resp: Response) {
        const data: Project[] = [
            {
                name: "My new Projects",
                cost: 100
            }
        ]
        resp.json(data)
    }
}

export default ProjectsAPIController