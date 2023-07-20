//应用
import React, { useRef } from "react";
//style
import style from "./Modal.module.css";
//组件
import { FiXCircle } from "react-icons/fi";
import {ButtonUI} from "../../stories/ui/Button/Button";
import CarouselComponent from "../../stories/ui/Carousel/Carousel";
//data
import { urls, modalUrls } from "../../utils/data/url";
//hooks
import { useStore } from "../../store";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";


export type TPopup = {
  /**
   * children
   */
  children?: React.ReactNode;
  /**
   * appear
   */
  appear: boolean;
  /**
   * setAppear: () => void
   */
  setAppear: (value: boolean) => void;
  /**
   * index
   */
  index: string;
  /**
   * content i18n
   */
  content: Record<string, any>;
};

function Modal({ ...props }: TPopup) {
  const [themeMode] = useStore((state) => [state.themeMode]);
  const handleClick = () => {
    props.setAppear(false);
  };
  const list = urls[props.index];

  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const isTablet = useMediaQuery({ maxWidth: 1224, minWidth: 480 });

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)",
  });

  const isRetina = useMediaQuery({
    query: "(max-resolution: 300dpi)",
  });
  const getStyle = () => {
    switch (true) {
      case isDesktop:
        return { width: 620 };
      case isTablet:
        return { width: 520 };
      case isMobile:
        return { width: 320 };
      case isRetina:
        return { width: 320 };
      default:
        return;
    }
  };
  const width = (getStyle() as { width: number }).width;
  return (
    <div
      className={[
        style.popup,
        `${themeMode}-modal`,
        props.appear ? style.appear : style.disapear,
        "modal",
      ].join(" ")}
    >
      <FiXCircle onClick={handleClick} />
      <CarouselComponent imageList={list} alt={props.index} />
      <main className={style.intro}>
        <p>{props.content[props.index]}</p>
      </main>
      <div className={style.popup_btn}>
        <Link
          href={modalUrls["appurl"][props.index]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonUI primary label={props.content.gotoapp} />
        </Link>
        {props.index === "imageplus" ? (
          <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", columnGap: "5px"}}>
            <Link
              href={modalUrls["githuburl"][props.index].backend}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonUI primary label="BE" />
            </Link>
            <Link
              href={modalUrls["githuburl"][props.index].frontend}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonUI primary label="FE" />
            </Link>
          </div>
        ) : (
          <Link
            href={modalUrls["githuburl"][props.index].frontend}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonUI primary label={props.content.gotogithub} />
          </Link>
        )}
      </div>
      <style jsx>{`
        div.modal {
          width: ${width}px;
          max-height: 60vh;
        }
      `}</style>
    </div>
  );
}

export default Modal;
