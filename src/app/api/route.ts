import { NextResponse } from "next/server";
import { db } from "../../utils/data";
import { type NextRequest } from "next/server";
import { type Message } from "../../component/utils/type";
/**
 * @swagger
 * /api:
 *   post:
 *     description: send email
 *     responses:
 *       200:
 *         description: post success
 *       500:
 *         description: post failed
 */
export async function POST(req: NextRequest) {
  try {
    const res = (await req.json()) as Message;
    const now = new Date();
    now.setHours(new Date().getHours() + 8);
    const current = now.toISOString();
    console.log(current);
    const message = { ...res, msg: res.message, createdTime: current };
    const query = await db
      .signin({
        user: process.env.DB_TEST_USER ?? "",
        pass: process.env.DB_PASS ?? "",
      })
      .then(async () => {
        await db.use({ ns: "test", db: "home" });
        return await db.create("message", message);
      })
      .catch((err) => {
        console.log(err);
        throw new Error("failed to db");
      })
      .finally(() => {
        db.close();
      });
    return NextResponse.json({ ...query[0], id: "" });
  } catch (error) {
    return new Response((error as Error).message, {
      status: 500,
    });
  }
}
/**
 * @swagger
 * /api:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET() {
  return NextResponse.json({ hello: "world" });
}
