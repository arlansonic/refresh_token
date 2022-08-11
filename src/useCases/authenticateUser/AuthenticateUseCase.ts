import { client } from '../../prisma/client';

interface IUserRequest {
    name: string;
    username: string;
    password: string
}

class AuthenticateUseCase {

    async execute({ name, username, password }: IUserRequest) {

        // Veriricar se usuário existe
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username,
            }
        })

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        // Cadastrar Usuário    
        const user = await client.user.create({
            data: {
                name,
                username,
                password,
            }
        })
    }
}

export { AuthenticateUseCase }