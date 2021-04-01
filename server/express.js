import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
//import cookieParser from' cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'



/* modules for server side rendering */
import React from 'react'
import ReactDOMServer from 'react-dom/server'

/* comment out before building for production */
import devBundle from './devBundle'

/* ensures Express server properly handles requests to static files 
such as CSS files, images or bundled client-side JS */
const CURRENT_WORKING_DIR = process.cwd()
const app = express()

/* comment out before building for production */
devBundle.compile(app)

/* parse body params and attach them to req.body*/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cookieParser())
app.use(compress())
/* secure apps by setting various HTTP headers */
app.use(helmet())
/* enable CORS - Cross Origin Resource Sharing*/
app.use(cors())

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

/* mount routes */
app.use('/', userRoutes)

app.get('/', (req, res) => {
    res.status(200).send(Template())
})


/* catch unauthorized errors */

export default app