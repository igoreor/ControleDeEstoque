import { Router, Request, Response} from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/AuthUserController";
import { isAuthenticated } from "./middleweres/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();
router.get("/test", (request: Request, response: Response) => {
    return response.json({ ok: true});

});
//users routes
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me',isAuthenticated, new DetailUserController().handle);
router.delete('/user/remove', new RemoveUserController().handle);

//category Routes 

router.post("/category", isAuthenticated, new CreateCategoryController().handle)





export { router };
