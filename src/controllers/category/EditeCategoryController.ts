import { EditeCategoryService } from "../../services/user/category/EditeCategoryService";
import { Request,Response } from "express";

class EditeCategoryController {

    async handle(request: Request, response: Response) {
        const { name } = request.body;
        const category_id = request.query.category_id as string;
        const editeCategoryService = new EditeCategoryService();
        const categoryEdited = editeCategoryService.execute({name, category_id});
        return response.json(categoryEdited);
    }
}
export {EditeCategoryController}