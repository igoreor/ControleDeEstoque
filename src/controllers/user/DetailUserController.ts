import { Request, Response } from "express"
import { DetailUserservice } from "../../services/user/detailUserService"

class DetailUserController{
    async handle(request: Request, response: Response){
        const user_id = request?.user_id;
        const detailUserService = new DetailUserservice;
        const user = await detailUserService.execute(user_id);
        return response.json(user);

    }
}


export {DetailUserController};