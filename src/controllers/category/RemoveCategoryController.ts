import { Request, Response } from "express";
import { RemoveCategoryService } from "../../services/user/category/RemoveCategoryService";

class RemoveCategoryController{
    async handle(request: Request, response: Response) {
        const category_id = request.query.category_id as string;
        const removeCategoryService = new RemoveCategoryService();
        const category = removeCategoryService.execute({category_id});
        return response.json({message: "category deleted sucessfully"})
    }

}
export {RemoveCategoryController}