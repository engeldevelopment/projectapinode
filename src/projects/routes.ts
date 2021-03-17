import Router from 'express'
import ProjectsAPIController from './controllers/projects'


const router = Router()

router.get('/projects', ProjectsAPIController.all)

export default router