import { Router } from "express";
import { getGuildMedia } from "../utils/imagery";
export const getMediaRouter = Router();
/**
 * @openapi
 * /api/v1/getMedia/{guildId}:
 *  get:
 *   summary: Get media for a specific guild
 *   parameters:
 *     - name: guildId
 *       in: path
 *       required: true
 *       schema:
 *         type: string
 *       description: The ID of the guild
 *       example: 123456789
 *   responses:
 *     200:
 *       description: This returns an array of ImageryMedia
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique ID of the media
 *                   example: abc123
 *                 type:
 *                   type: string
 *                   description: The type of media (image or youtube)
 *                   enum:
 *                     - image
 *                     - youtube
 *                   example: image
 *                 url:
 *                   type: string
 *                   description: The URL of the media
 *                   example: https://example.com/image.jpg
 *     404:
 *       description: Not Found
 */



getMediaRouter.get("/:guidId", async (req, res) => {
    const media = await getGuildMedia(req.params.guidId)
    if(!media) return res.sendStatus(404)
    res.send(media)
});
