import prismaClient from '../../prisma';
import { RemoveUserRequest } from '../../models/interfaces/user/RemoveUserRequest';

class RemoveUserService{
    static execute(arg0: { user_id: string; }) {
        throw new Error("Method not implemented.");
    }
    async execute({user_id,}: RemoveUserRequest){
        if (user_id){
            const removerUser = await prismaClient.user.delete({
                where:{
                    id: user_id
                }
            })
            return removerUser;
        }
    }

}

export {RemoveUserService}