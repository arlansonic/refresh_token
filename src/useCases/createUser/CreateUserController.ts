import { Request, Response } from 'express';
import { CreateUseCase } from './CreateUserCase';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, username, password } = req.body;

        const createUserUseCase = new CreateUseCase();

        const user = await createUserUseCase.execute({
            username,
            name,
            password,
        })
        // Retornando o usuário criado
        return res.json(user);
    }
}

export { CreateUserController }