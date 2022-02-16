import { Router } from "express";
import rendered from "../controllers/renderer";

const router = Router();

router.get("*", rendered);

export default router;
