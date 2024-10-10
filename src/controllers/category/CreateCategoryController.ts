import { Request, Response } from "express";
import { CategoryRequest } from "../../models/interfaces/user/category/CategoryRequest";
import { CreateCategoryService} from "../../services/user/category/CreateCategoryService"

class CreateCategoryController{
    async handle(request: Request, response:Response){
        const { name }: CategoryRequest = request.body;
        const createCategoryService = new CreateCategoryService();
        const category = await createCategoryService.execute({ name });
        return response.json(category);
    }




}
export {CreateCategoryController}