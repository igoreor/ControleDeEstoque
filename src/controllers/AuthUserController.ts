import { Request, Response } from "express";
import { AuthRequest } from "../models/interfaces/user/auth/AuthRequest";
import { AuthUserService } from "../services/user/AuthuserService";

class AuthUserController{ 
    async handle(request : Request, response: Response){
        const { email, password}:AuthRequest = request.body;
        const authUserService = new AuthUserService;
        const auth = await authUserService.execute({
            email, password
        });

        return response.json(auth);
    }
}



export{AuthUserController};
