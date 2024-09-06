import { Router } from "express";
import { getMediaRouter } from "./getMedia-route";
const router: Router = Router();
/**
* @swagger
* /api/v1:
*   get:
*    responses:
*      200:
*        description: return 200 
*/
router.get("/", (req,res) => {
    res.sendStatus(200);
})

router.use("/getMedia", getMediaRouter)
export default router