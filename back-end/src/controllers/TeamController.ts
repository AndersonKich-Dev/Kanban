import { User } from './../types/index';
import { Request, Response} from 'express'
import prismaClient from '../prisma'

class TeamController{

    
    async teamDeleted(request: Request, response: Response){
        const id = request.params.id

    

    try{  
        const rowsDeleted = await prismaClient.team.delete({
            where: {
                id: id,
            },
        })
       // validation.existsOrError(rowsDeleted, 'Categoria não foi encontrada')
        response.status(204).send()
        
    }catch(msg){
        response.status(400).send(msg)
    }
    }
}

export{ TeamController }