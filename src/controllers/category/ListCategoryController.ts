import { Response, Request } from "express";
import { ListCategoryService } from "../../services/user/category/ListCategoryService";

class ListCategoryController{
    async handle(request:Request, response:Response){
        const listCategoryService = new ListCategoryService();
        const categories = await listCategoryService.execute();
        return response.json(categories);
    }


}
export { ListCategoryController }