import { Router } from "express";
import { getGuildMedia } from "../utils/imagery";
export const getMediaRouter = Router();
/**
 * @openapi
 * /api/v1/getMedia:
 *  get:
 *   summary: Get media for a specific guild
 *   parameters:
 *     - name: guidId
 *       in: path
 *       required: true
 *       schema:
 *         type: string
 *       description: The ID of the guild
 *   responses:
 *     200:
 *       description: This returns an array of ImageryMedia
 */

getMediaRouter.get("/:guidId", async (req, res) => {
    const media = await getGuildMedia(req.params.guidId)
    if(!media) return res.sendStatus(404)
    res.send(media)
});
