//style
import style from "./index.module.css";
//组件
import PicCard from "./PicCard";

type TPortfolio = {
  /**
   * content i18n
   */
  content: Record<string, any>
};

function Portfolio({ ...props }: TPortfolio) {
  return (
    <article id="portfolio" className={style.container}>
      <section>
        <h1>{props.content.title}</h1>
      </section>
      <main>
        <div className={style.wrapper}>
          <PicCard
            foreSrc=""
            backSrc=""
            list={["Frontend", "React", "Next.js", "Typescript", "Storybook"]}
          />
          <PicCard
            foreSrc=""
            backSrc=""
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
          />
          <PicCard
            foreSrc=""
            backSrc=""
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
          />
        </div>
      </main>
    </article>
  );
}

export default Portfolio;
