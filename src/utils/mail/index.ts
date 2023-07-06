import nodemailer from "nodemailer";
//Mail is important for Type importing here. Don't delete this row.
import Mail from 'nodemailer/lib/mailer';

export type MailResponseError = {
  errno: number;
  code: string;
  syscall: string;
  address: string;
  port: number;
  command: string;
};
type MailResponse = {
  accepted: Array<string>;
  rejected: Array<unknown>;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string | MailResponseError;
  envelope: { from: string; to: string };
  messageId: string;
};

const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PWD;

class Mailer {
  private mailer: nodemailer.Transporter;
  constructor() {
    this.mailer = nodemailer.createTransport({
      //gmail
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 587, // SMTP 端口
      secure: false,
      auth: {
        user,
        pass,
      },
      tls: {
        ciphers: "SSLv3",
      },
      //qq
      /*
      service: "qq",
      port: 465, // SMTP 端口
      secure: true,
      auth: {
        user,
        pass,
      },
      */
    });
  }
  /**
   * 发送邮件
   * @param subject 主题，标题
   * @param content 内容
   * @returns Promise object
   */
  sendMail(subject: string, content: string): Promise<MailResponse> {
    return this.mailer.sendMail({
      from: `"Clark" <${user}>`,
      to: user,
      subject: subject,
      text: "无需回复",
      html: content,
    });
  }
}

export { Mailer };
export type { MailResponse };
