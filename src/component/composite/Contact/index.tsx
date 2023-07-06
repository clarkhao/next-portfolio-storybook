//style
import style from "./index.module.css";
//组件
import ContactForm from "./ContactForm";
import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("./ContactMap"), { ssr: false });

type TContact = {
  /**
   * contact i18n
   */
  content: Record<string,any>
};

function Contact({ ...props }: TContact) {
  return (
    <article className={style.container} id="contact">
      <ContactForm content={props.content} />
      <ContactMap />
    </article>
  );
}

export default Contact;
