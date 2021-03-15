import request from 'supertest'

import app from '../src/app'

describe('App Server', () => {
   describe('GET /', () => {
      it('deberia responder el message', (done) => {
        const response = request(app).get('/')
        const data = {"message": "Hi, i am typescript"}
        response.expect(200, data)
            .end(done)
      }); 
   }); 
});