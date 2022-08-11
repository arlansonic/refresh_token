import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { Router } from "express";

const router = Router();

const createUserController = new CreateUserController()

// Rota para criar um usuário
router.post('/users', createUserController.handle)

export { router };