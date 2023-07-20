"use client";
//应用
import React, { Fragment } from "react";
//style
import style from "./WhoAmI.module.css";
//组件
import LetterUI from "../../stories/ui/Letter/Letter";

export type TWhoAmI = {
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
  const [typing, setTyping] = React.useState(true);
  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setTyping(false);
    }, props.content.length * 120);
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
            <LetterUI
              key={el + i + "_letter"}
              styles={
                typing
                  ? {
                      animationDelay: `${0.1 * i}s`,
                    }
                  : {}
              }
              locale={props.locale}
            >
              {el}
            </LetterUI>
          );
        })}
      </div>
    </article>
  );
}

function LaterWhoAmIUI({ ...props }: TWhoAmI) {
  const [timer, setTimer] = React.useState(0);
  const [mounted, setMouned] = React.useState(false);
  React.useEffect(() => {
    setTimer(window.setTimeout(() => setMouned(true), 500));
    return () => window.clearTimeout(timer);
  }, []);

  return mounted ? (
    <WhoAmI {...props} />
  ) : (
    <div className={style.container}></div>
  );
}
export default LaterWhoAmIUI;
