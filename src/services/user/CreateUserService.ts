import prismaClient from "../../prisma";
import{ hash } from "bcryptjs";
import {UserRequest} from "../../models/interfaces/user/UserRequest"
class CreateUserService{
    async execute({name, email, password}: UserRequest){
        if (!email ){
            throw new Error("Email incorrect")
        }
        const userAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email : email
            }
        })
        if(userAlreadyExist) {
            throw new Error("Email already exists")
        }

        // encriptando a sneha de usuario 

        const passwordHash = await hash(password, 8);

        // criando o usuario 

        const user = await prismaClient.user.create({
            data: {
                name : name,
                email : email,
                password : passwordHash
            },
            select:{
                id: true,
                name: true, 
                email: true 
            },
        })

        return user;
    }
    
}
export {CreateUserService};
