import express from 'express'
import bodyParser from 'body-parser'

import router from './projects/routes' 

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use('/api/v1', router)


app.get('/', (req, resp) => {
    resp.send({"message": "Bienvenido a la api de projects!"})
})




export default app