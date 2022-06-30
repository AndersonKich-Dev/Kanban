import { Request, Response} from 'express'
import prismaClient from '../prisma'
import bcrypt from 'bcrypt-nodejs';

import { User } from '../types'
import { Validation } from '../config/validation'

class UserController {

    async create(request:Request, response:Response) {
        const user: User = request.body
        const id = request.params.id

        const validation = new Validation();

        const encryptPassword = (password:string) => {
            const salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(password, salt)
        }

        try {
            const userfronDb = await prismaClient.user.findFirst({
                where: {
                    email: user.email
                }
            })

            if(!id) {
                if(userfronDb) validation.notExistsOrError(userfronDb, 'Usuário já cadastrado!')
                validation.existsOrError(user.confirmPassword, 'Comfirmação de senha não informada');
                validation.equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')

               
            }

            validation.existsOrError(user.name, 'Nome não informado');
            validation.existsOrError(user.email, 'E-mail não informado');
            validation.existsOrError(user.company, 'Company não informada');
            validation.existsOrError(user.password, 'Senha não informada');
        }
        catch(msg) {
            return response.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)


        if(id) {
            await prismaClient.user.update({
                where: {
                    id: id,
                },
                data: {
                    name: user.name,
                    email: user.email,
                    type: user.type,
                    company: user.company,
                    password: user.password,
                }
            })
            .then(_ => response.status(204).send())
            .catch(err => response.status(500).send(err))
        }
        else {
            await prismaClient.user.create({
                data:<User> {
                    name: user.name,
                    email: user.email,
                    type: user.type,
                    company: user.company,
                    password: user.password,
                },
                include: {
                    task: true,
                }
            })
            .then(_ => response.status(204).send())
            .catch(err => response.status(500).send(err))
        }
    }

    async getUser(request: Request, response: Response) {
        const id:string = request.params.id;

        const user = await prismaClient.user.findUnique({
            where: {
                id: id,
            },
            include: {
                task: true
            }
        })
        return response.json(user)
    }

    async getAll(request: Request, response: Response) {
        const users = await prismaClient.user.findMany()

        return response.json(users)
    }

}

export {UserController};