import { Redis } from "ioredis";
import { config } from "dotenv";
config();
const redisClient: Redis = new Redis(process.env.REDIS_URI!);
redisClient.on("ready", () => {
    console.log("Connected to the redis database.")
})
export default redisClient