import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, username, password } = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const user = await createUserUseCase.execute({
            name,
            username,
            password
        })
        // Retornando o usuário criado
        return res.json(user);
    }
}

export { CreateUserController }