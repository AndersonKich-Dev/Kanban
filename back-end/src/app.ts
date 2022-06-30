import express from 'express'
import passport from 'passport'
import cors from 'cors'
import { router } from './config/routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(passport.initialize());
app.use(router);


app.listen(3333, () => {
    console.log('Backend executando na porta 3333...')
})
