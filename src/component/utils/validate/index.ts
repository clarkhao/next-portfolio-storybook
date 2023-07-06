/**
 * 检查user, email, subject, message字数限制
 * 检查email格式
 * 检查
 */
import z from "zod";

const MAX_SIZE = 20;
const MAX_MESSAGE_SIZE = 1000;

export const formSchema = z.object({
    user: z.string().max(MAX_SIZE),
    email: z.string().email().max(MAX_SIZE),
    subject: z.string().max(MAX_SIZE),
    message: z.string().nonempty().max(MAX_MESSAGE_SIZE),
});
