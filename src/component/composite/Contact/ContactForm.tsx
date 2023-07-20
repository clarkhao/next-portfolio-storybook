"use client";
//应用
import React from "react";
import { formSchema } from "../../utils";
import axios from "axios";
//style
import style from "./ContactForm.module.css";
//组件
import InputUI from "../../../stories/ui/Input/Input";
import { ButtonUI } from "../../../stories/ui/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//hook
import { useStore } from "../../../store";
//type
import { type Message } from "../../utils/type";

type TContactForm = {
  /**
   * content i18n
   */
  content: Record<string, any>;
};

function ContactForm({ ...props }: TContactForm) {
  const [form, setForm] = React.useState<Message>({
    user: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errMsg, setErrMsg] = React.useState<Message>({
    user: "",
    email: "",
    subject: "",
    message: "",
  });

  const [themeMode] = useStore((state) => [state.themeMode]);
  const submitHandler = () => {
    const validated = formSchema.safeParse(form);
    if (!validated.success) {
      validated.error.issues.forEach((issue) => {
        setErrMsg((prev) => ({ ...prev, [issue.path[0]]: issue.message }));
        toast.error(`${issue.path[0]}:${issue.message}`);
      });
    } else {
      console.log(`send email, ${form}`);
      axios({
        url: "/api",
        method: "POST",
        data: form,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 200) toast.success("Message Sent!");
        else toast.error("Message Failed!");
      });
    }
  };
  return (
    <div className={style.container}>
      <h1>{props.content.title}</h1>
      <form className={style.form}>
        <div className={style.first}>
          <InputUI
            icon={null}
            labelText={props.content.form.user}
            name="user"
            type="text"
            value={form.user}
            handleInput={(e) =>
              setForm((prev) => ({ ...prev, user: e.target.value }))
            }
            errMsg={errMsg["user"]}
            handleFocus={() => {
              setErrMsg((prev) => ({ ...prev, user: "" }));
            }}
          />
          <InputUI
            icon={null}
            labelText={props.content.form.email}
            name="email"
            type="email"
            value={form.email}
            handleInput={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            errMsg={errMsg["email"]}
            handleFocus={() => {
              setErrMsg((prev) => ({ ...prev, email: "" }));
            }}
          />
        </div>
        <InputUI
          icon={null}
          labelText={props.content.form.subject}
          name="subject"
          type="text"
          value={form.subject}
          handleInput={(e) =>
            setForm((prev) => ({ ...prev, subject: e.target.value }))
          }
          errMsg={errMsg["subject"]}
          handleFocus={() => {
            setErrMsg((prev) => ({ ...prev, subject: "" }));
          }}
        />
        <div className={style.textarea}>
          <textarea
            id="contact-text"
            name="message"
            className={[
              style.text,
              errMsg["message"]?.length > 0 ? style.error : "",
              themeMode === "light" ? style.light : style.dark,
            ].join(" ")}
            onFocus={() => {
              setErrMsg((prev) => ({ ...prev, message: "" }));
            }}
            value={form.message}
            onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setForm((prev) => ({ ...prev, message: e.target.value }))
            }
            placeholder={props.content.form.message}
          />
          <label className={style.label} htmlFor="contact-text"></label>
        </div>
        <ButtonUI primary label="Submit" onClick={submitHandler} />
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
