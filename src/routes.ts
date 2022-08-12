import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { TestComponent } from '../src/useCases/model/ModelUseTestServer'
import { Router } from "express";

const router = Router();

const createUserController = new CreateUserController()
const testeComponente = new TestComponent()

// Rota para criar um usuário
router.post('/users', createUserController.handle)
router.get('/', testeComponente.handle)

export { router };