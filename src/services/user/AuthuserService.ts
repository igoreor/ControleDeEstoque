import { compare } from "bcryptjs"; 
import { sign } from "jsonwebtoken";
import { Prisma } from "@prisma/client";
import { AuthRequest } from '../../models/interfaces/user/auth/AuthRequest'
import prismaClient from "../../prisma";

class AuthUserService{
    async execute ({email,password}: AuthRequest){

        if(!email){
            throw new Error("Email needs sended")
        }

        if(!password){
            throw new Error("Password needs sended")
        }

        //verificar se existe esse email 
        const user = await prismaClient.user.findFirst({
            where: {
                email : email
            }

        });
        if (!user){
            throw new Error("wrong user name or password")
        }

        //verificar se a senha do usuario está correta 
        const passwordMatch = await compare(password, user?.password)

        if(!passwordMatch){
            throw new Error("Wrong password")

        }
        
        const token = sign({
            name : user?.name,
            email : user?.email
            },
            process.env.JWT_SECRET as string,
            {
            subject: user?.id,
            expiresIn : "30d"
            }
        );

        return{
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token: token

        }
    }   
}
export {AuthUserService};
