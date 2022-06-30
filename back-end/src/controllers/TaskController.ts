import { Request, Response} from 'express'
import prismaClient from '../prisma'
import { Task } from '../types'
import crypto from 'crypto'
import { Validation } from '../config/validation'


class TaskController {
    async create(request:Request, response:Response) {
        const task:Task = request.body
        const id = request.params.id

        const validation = new Validation();

        try {
            validation.existsOrError(task.name, 'Nome não informado');
            validation.existsOrError(task.sector, 'Setor não informado');
            validation.existsOrError(task.project, 'Projeto não informado');

            validation.existsOrError(task.description, 'Descrição não informado');
            validation.existsOrError(task.status, 'Status não informado');
           // validation.existsOrError(task.deadline, 'Data de entrega não informado');

        }
        catch(msg) {
            return response.status(400).send(msg)
        }

        if(id) {
            await prismaClient.task.update({
                where: {
                    id:id,
                },
                data:<Task> {
                    name: task.name,
                    project: task.project,
                    description: task.description,
                    status: task.status,
                    sector: task.sector,
                    code: task.code,
                    progress: task.progress,
                    estimated_time: task.estimated_time,   
                    time_balance: task.time_balance, 
                    team: { create: task.team },
                    user_id: task.user_id,
                    deadline: task.deadline                    
                }
            })
            .then(_ => response.status(204).send())
            .catch(err => response.status(500).send(err))
        }
        else {
            await prismaClient.task.create({
                data:<Task> {
                    name: task.name,
                    project: task.project,
                    description: task.description,
                    status: task.status,
                    sector: task.sector,
                    code: `#${crypto.randomBytes(3).toString('hex')}`,
                    estimated_time: task.estimated_time,   
                    time_balance: task.time_balance, 
                    progress: task.progress,
                    deadline: task.deadline,
                    user_id: task.user_id,
                    team: { create: task.team }
                }
            })
            .then(_ => response.status(204).send())
            .catch(err => response.status(500).send(err))
        }
    }

    async getTask(request: Request, response: Response) {
        const id:string  = request.params.id
        
        const task = await prismaClient.task.findUnique({
            where: {
                id:id,
            }
        })

    
        return response.json(task)
    }

    async getAll(request: Request, response: Response) {
        const tasks = await prismaClient.task.findMany({
            include: {
                team: true,
            }
        })

        return response.json(tasks)
    }
}

export { TaskController };