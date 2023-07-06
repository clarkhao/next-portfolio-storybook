"use client";
//应用
import React from "react";
//style
import style from "./PicCard.module.css";
//组件
import Labels from "../../ui/Labels";
import Image from "next/image";

type TPicCard = {
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
};

function PicCard({...props }: TPicCard) {
  const [onLabel, setOnLabel] = React.useState(false);
  return (
    <div
      className={style.container}
      onMouseOver={() => setOnLabel(true)}
      onMouseLeave={() => setOnLabel(false)}
    >
      <div className={style.bar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={style.label}>Github</div>
      <div className={style.image}>
        <Image
          className={style.fore}
          width={400}
          height={267}
          src="https://picsum.photos/400/267?random=1"
          alt="project"
        />
        <Image
          className={style.back}
          width={400}
          height={267}
          src="https://picsum.photos/400/267?random=2"
          alt="project"
        />
        {onLabel ? <Labels list={props.list}/> : null}
      </div>
    </div>
  );
}

export default PicCard;
