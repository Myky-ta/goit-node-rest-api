import express from "express";
import * as ctrl from "../controllers/contactsControllers.js";
import { validateBody } from "../helpers/validateBody.js";
import { addSchema, updateSchema } from "../schemas/contactsSchemas.js";

const router = express.Router();

router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.delete("/:id", ctrl.remove);
router.post("/", validateBody(addSchema), ctrl.add);
router.put("/:id", validateBody(updateSchema), ctrl.update);

export default router;
