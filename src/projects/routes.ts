import Router from 'express'
import ProjectsAPIController from './controllers/projects.controller'


const router = Router()

router.get('/projects', ProjectsAPIController.all)

export default router