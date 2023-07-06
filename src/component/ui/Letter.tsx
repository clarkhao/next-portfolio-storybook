"use client";
import React, { Fragment } from "react";
//style
import style from "./Letter.module.css";
//组件

type TLetter = {
  /**
   * charater children
   */
  children: string;
  /**
   * styles inline
   */
  styles: React.CSSProperties;
};

function Letter({ children, ...props }: TLetter) {
  const [bouncy, setBouncy] = React.useState(false);
  return (
    <Fragment>
      <span
        className={[style.container, bouncy ? style.bouncy : ""].join(" ")}
        onMouseEnter={(e) => {
          if (bouncy) return;
          setBouncy(true);
          window.setTimeout(() => {
            setBouncy(false);
          }, 1000);
        }}
        style={props.styles}
      >
        {children}
      </span>
    </Fragment>
  );
}

export default Letter;
