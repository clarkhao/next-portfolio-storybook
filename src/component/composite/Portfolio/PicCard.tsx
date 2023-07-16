"use client";
//应用
import React from "react";
//style
import style from "./PicCard.module.css";
//组件
import Labels from "../../../component/ui/Label";
import Image from "next/image";
//hooks
import { useMediaQuery } from "react-responsive";

export type TPicCard = {
  /**
   * foreground image src
   */
  foreSrc: string;
  /**
   * background image src
   */
  backSrc: string;
  /**
   * list
   */
  list: Array<string>;
  /**
   * toggle modal show
   */
  toggleModal?: () => void;
  /**
   * styles
   */
  styles: {width: number, imgHeight: number, barHeight: number}
};

function PicCard({ ...props }: TPicCard) {
  const [onLabel, setOnLabel] = React.useState(false);
 
  return (
    <div
      className={[style.container, "card-container"].join(" ")}
      onMouseOver={() => setOnLabel(true)}
      onMouseLeave={() => setOnLabel(false)}
      onClick={props.toggleModal}
    >
      <div className={[style.bar, "card-bar"].join(" ")}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={[style.image, "card-image"].join(" ")}>
        <Image
          className={style.fore}
          width={props.styles.width}
          height={props.styles.imgHeight}
          src={props.foreSrc ?? "https://picsum.photos/400/267?random=1"}
          alt="project"
        />
        <Image
          className={style.back}
          width={props.styles.width}
          height={props.styles.imgHeight}
          src={props.backSrc ?? "https://picsum.photos/400/267?random=2"}
          alt="project"
        />
        {onLabel ? <Labels list={props.list} /> : null}
      </div>
      <style jsx>{`
        div.card-container {
          width: ${props.styles.width}px;
        }
        .card-bar {
          width: ${props.styles.width}px;
          height: ${props.styles.barHeight}px;
        }
        .card-image {
          width: ${props.styles.width}px;
          height: ${props.styles.imgHeight}px;
        }
      `}</style>
    </div>
  );
}

export default PicCard;
