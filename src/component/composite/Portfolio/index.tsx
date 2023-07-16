"use client";
import React from "react";
//style
import style from "./index.module.css";
//组件
import PicCard from "./PicCard";
import Modal from "../../../component/layout/Modal";
//hooks
import { useMediaQuery } from "react-responsive";

export type TPortfolio = {
  /**
   * content i18n
   */
  content: { portfolio: Record<string, any>; modal: Record<string, any> };
};
function Portfolio({ ...props }: TPortfolio) {
  const portfolio = props.content.portfolio;
  const modal = props.content.modal;
  const [index, setIndex] = React.useState("portfolio");
  const [appear, setAppear] = React.useState<boolean | null>(null);

  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const isTablet = useMediaQuery({ maxWidth: 1224, minWidth: 480 });

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const isColumn = useMediaQuery({ minWidth: 1024 });

  const isRetina = useMediaQuery({
    query: "(max-resolution: 300dpi)",
  });

  const getStyle = () => {
    switch (true) {
      case isDesktop:
        console.log("isDesktop");
        return {
          width: 920,
          itemWidth: 450,
          barHeight: 30,
          imgHeight: 225,
        };
      case isTablet:
        console.log("isTablet");
        return {
          width: 820,
          itemWidth: 400,
          barHeight: 30,
          imgHeight: 200,
        };
      case isMobile:
        console.log("isMobile");
        return {
          width: 320,
          itemWidth: 320,
          barHeight: 25,
          imgHeight: 160,
        };
      case isRetina:
        console.log("isRetina");
        return {
          width: 320,
          itemWidth: 320,
          barHeight: 25,
          imgHeight: 160,
        };
      default:
        console.log("default");
        return;
    }
  };
  const size = getStyle() as {
    width: number;
    itemWidth: number;
    barHeight: number;
    imgHeight: number;
  };
  console.log(size);
  return (
    <article id="portfolio" className={style.container}>
      <section>
        <h1>{portfolio.title}</h1>
      </section>
      <div className={[style.wrapper, "portfolio"].join(" ")}>
        <PicCard
          foreSrc="/portfolio/light.png"
          backSrc="/portfolio/index.png"
          list={["Frontend", "React", "Next.js", "Typescript", "Storybook"]}
          toggleModal={() => {
            setIndex("portfolio");
            setAppear(true);
          }}
          styles={{
            width: size.itemWidth,
            barHeight: size.barHeight,
            imgHeight: size.imgHeight,
          }}
        />
        <PicCard
          foreSrc="/imageplus/index.png"
          backSrc="/imageplus/black-index.png"
          list={[
            "Fullstack",
            "TS",
            "Kotlin",
            "Spring Boot",
            "RestAPI",
            "React",
            "Storybook",
            "Swagger",
            "PostgreSQL",
            "Surrealdb",
            "Animation",
          ]}
          toggleModal={() => {
            setIndex("imageplus");
            setAppear(true);
          }}
          styles={{
            width: size.itemWidth,
            barHeight: size.barHeight,
            imgHeight: size.imgHeight,
          }}
        />
        <PicCard
          foreSrc="/animflow/light.jpg"
          backSrc="/animflow/black.jpg"
          list={[
            "Fullstack",
            "TS",
            "Kotlin",
            "GraphQL",
            "Next.js",
            "Storybook",
            "Web",
            "Mobile",
            "Animation",
          ]}
          styles={{
            width: size.itemWidth,
            barHeight: size.barHeight,
            imgHeight: size.imgHeight,
          }}
        />
      </div>
      {appear ? <Modal appear setAppear={setAppear} index={index} content={modal}/> : null}
      <style jsx>{`
        .portfolio {
          width: ${size.width}px;
          flex-direction: ${isColumn ? "row" : "column"};
          align-items: ${isColumn ? "start" : "center"};
        }
      `}</style>
    </article>
  );
}

export default Portfolio;
