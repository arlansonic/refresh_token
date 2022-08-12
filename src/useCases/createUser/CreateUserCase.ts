import { hash } from 'bcryptjs';
import { client } from '../../prisma/client';

interface IUserRequest {
    name: string;
    username: string;
    password: string;
}

class CreateUserCase {

    async execute({ name, username, password }: IUserRequest) {

        // Veriricar se usuário existe
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username,
            },
        })

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        // Criando Hash da senha
        const hashedPassword = await hash(password, 8)

        // Cadastrar Usuário
        const user = await client.user.create({
            data: {
                name,
                username,
                password: hashedPassword,
            }
        })
        return user
    }
}

export { CreateUserCase }