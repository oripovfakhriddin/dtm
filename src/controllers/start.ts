import { Context } from "grammy";
import { bot } from "../core/bot";

const startController = async (ctx: Context) => {
  await ctx.reply(
    `Assalamu aleykum <b>${ctx?.message}</b> botimizga xush kelibsiz!`,
    {
      parse_mode: "HTML",
    }
  );
};

export { startController };
