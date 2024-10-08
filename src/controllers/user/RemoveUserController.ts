import { Request, Response} from "express";
import { RemoveUserService } from "../../services/user/RemoveUserService";

class RemoveUserController{
    
    async handle(request: Request, response: Response){
        const user_id = request?.query.user_id as string;
        const removerUserService = new RemoveUserService();
        const removerUser = RemoveUserService.execute({ user_id });
        return response.json(removerUser);
    }

}


export {RemoveUserController}