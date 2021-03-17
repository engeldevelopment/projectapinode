import mongoose from 'mongoose'

import request  from 'supertest'

import app from '../src/app'

import ProjectModel from '../src/projects/models/project.model'


mongoose.connect('mongodb://localhost/testProjects', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

mongoose.connection.on('error', () => {
   console.error('Ocurrió un error al conectarse')
})


describe('Project API', () => {
   let server = null
   beforeAll(() => {
      server = request(app)
   })
   
   beforeEach(async () => {
      await ProjectModel.deleteMany()
   })

   afterAll(async () => {
      await mongoose.connection.db.dropDatabase()
      await mongoose.connection.close()   
   })

   describe('GET /', () => {
      it('should response the welcome message', (done) => {
        const data = {"message": "Bienvenido a la api de projects!"}
        
        const response = server.get('/')
        
        response.expect(200, data)
            .end(done)
      });
   });

   describe('GET /api/v1/projects', () => {
      describe('when there are projects', () => {
         it('should show a project list', async (done) => {
          await ProjectModel.create({
             name: "My new Projects",
             cost: 100
          })
          
          const response = await server.get('/api/v1/projects') 
    
          expect(response.body).toHaveProperty('projects')
          expect(response.body.projects).toHaveLength(1)
          done()
         }); 
      });

     describe('when there are not projects', () => {
       it('should show a empty list', async (done) => {
         const response = await server.get('/api/v1/projects') 
         expect(response.body.projects).toHaveLength(0)
         done()
       }); 
     });
   });
});