import "dotenv/config";
import jwt from 'jwt-simple'
import bcrypt from 'bcrypt-nodejs';
import prismaClient from '../prisma'
import { Request, Response} from 'express'

const authSecret:any = process.env.AUTHSECRET;

    class AuthController {
        
          async signin (request: Request, response: Response){
            
            if(!request.body.email || !request.body.password){
                return response.status(400).send('Informe usuario e senha')
            }

            const user = await prismaClient.user.findFirst({
                where: {
                    email: request.body.email
                }
            })
    
            if(!user) return response.status(400).send('Usuario não encontrado!')
    
            const isMatch = bcrypt.compareSync(request.body.password, user.password)
            if(!isMatch) return response.status(401).send('Email/senha inválidos')
    
            const now = Math.floor(Date.now()/1000)
    
            const payLoad = {
                id: user.id,
                name: user.name,
                email: user.email,
                iat: now, 
                exp: now + (60 * 60 * 5)
            }
            
           response.json({
                ...payLoad,
                token: jwt.encode(payLoad, authSecret)
            })
        }
    
            validateToken = async (request: Request, response: Response) => {
                const userData = request.body || null
                try{
                    if(userData){
                        const token = jwt.decode(userData.token, authSecret)
                        if(new Date(token.exp * 1000) > new Date()){
                            return response.send(true)
                        }
                    }
                }
                catch(e){
                    //problema com o token
                }
    
                response.send(false)
            }
    
            
    }

    export { AuthController }
    







