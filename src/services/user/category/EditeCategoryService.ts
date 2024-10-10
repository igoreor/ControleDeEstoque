import { EditeCategoryRequest } from "../../../models/interfaces/user/category/EditeCategoryRequest";
import prismaClient from "../../../prisma";


class EditeCategoryService{
    async execute({name, category_id}: EditeCategoryRequest){

        if(category_id === " " || name === " " || !name || !category_id){

            throw new Error("invalid arguments to edit category");
        }

        const productEdited = await prismaClient.category.update({
            where:{
                id: category_id
            
            },
            data: {
                name:name
            },
        });
        return productEdited;
    }
}
export {EditeCategoryService}