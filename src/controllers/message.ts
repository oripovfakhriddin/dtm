import { Context } from "grammy";
import { bot } from "../core/bot";

const checkValidationNumber = (str: string) => {
  const regex = /^\d{7}$/;
  return regex.test(str);
};

const downloadUserData = async (str: string, ctx: Context) => {};

const messageController = async (ctx: Context) => {
  const message = ctx.message?.text as string;
  const isValid = checkValidationNumber(message);
  if (isValid) {
    await ctx.reply(`Siz xabar jo'natdingiz! Javobni yaqinda e'lon qilamiz!`);
    await ctx.replyWithChatAction("typing");
    await downloadUserData(message, ctx);
  } else {
    await ctx.reply(
      `Siz kiritgan <b>javoblar varaqasi</b> mavjud emas. Qaytadan urinib ko'ring!`,
      { parse_mode: "HTML" }
    );
    await ctx.replyWithChatAction("typing");
  }
};

export { messageController };
