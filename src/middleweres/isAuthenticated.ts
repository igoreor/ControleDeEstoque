import {Request, Response, NextFunction} from 'express';
import { Payload } from '../models/interfaces/user/auth/Payload';
import { verify } from "jsonwebtoken";

export function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
){
    //acessar token 
    const authtoken = request.headers.authorization;

    if(!authtoken){
        return response.status(401).end();
    }
    
    const[, token] = authtoken.split(" ");

    try{
        //validar o token 
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
        request.user_id = sub;
        return next(); //deixa a requisição seguir seu caminho
    }catch(error){
        return response.send(401).end();
    }
}

