"use client";
//应用
import React, { Fragment } from "react";
//style
import style from "./WhoAmI.module.css";
//组件
import Letter from "../ui/Letter";

type TWhoAmI = {
  /**
   * whoami i18n
   */
  content: string;
  /**
   * locale
   */
  locale: string;
};

function WhoAmI({ ...props }: TWhoAmI) {
  const [typing, setTyping] = React.useState(false);
  React.useEffect(() => {
    setTyping(true);
    const timer = window.setTimeout(() => {
      setTyping(false);
    }, props.content.length * 150);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <article id="whoami" className={style.container}>
      <div className={[style.text, typing ? style.typing : ""].join(" ")}>
        {props.content.split("").map((el, i) => {
          if (el === "\n")
            return (
              <br
                key={i + "_newline"}
                style={{ animationDelay: `${0.1 * i}s` }}
              />
            );
          return el === " " ? (
            <span
              className={style.space}
              key={i + "_space"}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              m
            </span>
          ) : (
            <Letter
              key={el + i + "_letter"}
              styles={
                typing
                  ? {
                      animationDelay: `${0.1 * i}s`,
                      width: props.locale !== "en" ? "72px" : "48px",
                    }
                  : { width: props.locale !== "en" ? "72px" : "48px" }
              }
            >
              {el}
            </Letter>
          );
        })}
      </div>
    </article>
  );
}

export default WhoAmI;
