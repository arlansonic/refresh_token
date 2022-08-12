import { Request, Response } from 'express';
import { CreateUserCase } from './CreateUserCase';

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, username, password } = request.body;

        const createUserUseCase = new CreateUserCase();

        const user = await createUserUseCase.execute({
            name,
            username,
            password
        })
        // Retornando o usuário criado
        return response.json(user);
    }
}

export { CreateUserController }