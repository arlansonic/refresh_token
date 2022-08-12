import { Request, Response } from "express";
import { SearchUser } from "./ModelTestServer";

class TestComponent {
    async handle(req: Request, res: Response) {

        res.json('Server is Running')
        
        const Search = new SearchUser()
        const test = await Search.execute({
        })
    }
}

export { TestComponent }