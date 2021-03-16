import request  from 'supertest'

import app from '../src/app'

describe('Project API', () => {
   let server = null
   beforeAll(() => {
      server = request(app)
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
     it('should show a project list', (done) => {
      const data = [{
         name: "My new Projects",
         cost: 100
      }] 

      const response = server.get('/api/v1/projects') 

      response.expect(200, data)
        .end(done)
     }); 
   });
});