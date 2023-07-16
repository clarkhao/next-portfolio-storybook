"use client";
import React, { Fragment } from "react";
//style
import style from "./Letter.module.css";
//hooks
import { useMediaQuery } from "react-responsive";

export type TLetter = {
  /**
   * charater children
   */
  children: string;
  /**
   * styles inline
   */
  styles: React.CSSProperties;
  /**
   * locale
   */
  locale: string;
};

function LetterUI({ children, ...props }: TLetter) {
  const [bouncy, setBouncy] = React.useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const isTablet = useMediaQuery({ maxWidth: 1224, minWidth: 480 });

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)",
  });

  const isRetina = useMediaQuery({
    query: "(max-resolution: 300dpi)",
  });
  const getSize = () => {
    switch (true) {
      case isDesktop:
        return 80;
      case isTablet:
        return 64;
      case isMobile:
        return 24;
      case isRetina:
        return 20;
      default:
        return 80;
    }
  };
  const size = getSize();
  return (
    <Fragment>
      <span
        className={[style.container, bouncy ? style.bouncy : "", "letter"].join(
          " "
        )}
        onMouseEnter={(e) => {
          if (bouncy) return;
          setBouncy(true);
          window.setTimeout(() => {
            setBouncy(false);
          }, 1000);
        }}
        lang={props.locale}
        style={props.styles}
      >
        {children}
        <style jsx>{`
          span.letter {
            font-size: ${size}px;
            line-height: ${size*1.5}px;
          }
          span.letter:lang(cn) {
            width: ${size}px;
          }
          span.letter:lang(en) {
            width: ${size / 2}px;
          }
          span.letter:lang(jp) {
            width: ${size}px;
          }
        `}</style>
      </span>
    </Fragment>
  );
}

export default LetterUI;
