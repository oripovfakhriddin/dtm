import { bot } from "../core/bot";
import { messageController } from "../controllers";

bot.on("message", messageController );
