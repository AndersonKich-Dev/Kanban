import { Router } from 'express'
import { AuthController } from '../controllers/AuthController';
import { TaskController } from '../controllers/TaskController';
import { UserController } from '../controllers/UserController';
import { TeamController } from '../controllers/TeamController'

import Auth from '../middleware/passport'

const router = Router();

router.post("/signin", new AuthController().signin);
router.post("/signup", new UserController().create);
router.get("/user/:id", Auth().authenticate(), new UserController().getUser);
router.get("/users", Auth().authenticate(), new UserController().getAll);

router.delete("/team/:id", Auth().authenticate(), new TeamController().teamDeleted);

router.post("/task", Auth().authenticate(), new TaskController().create);
router.get("/task/:id", Auth().authenticate(), new TaskController().getTask);
router.put("/task/:id", Auth().authenticate(), new TaskController().create);
router.get("/tasks", Auth().authenticate(), new TaskController().getAll);

export { router };