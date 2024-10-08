import { Router, Request, Response} from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/AuthUserController";

const router = Router();
router.get("/test", (request: Request, response: Response) => {
    return response.json({ ok: true});

});
//users routes
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
export { router };
