"use client";
//应用
//style
import style from "./Skills.module.css";
//组件
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";

type TSkills = {
  /**
   * content i18n
   */
  content: Record<string, any>;
};

const texts = [
  "React",
  "JavaScript",
  "CSS",
  "HTML",
  "Node.js",
  "Postgresql",
  "Express",
  "Mui",
  "Typescrpit",
  "Git",
  "GitHub",
];

function Skills({ ...props }: TSkills) {
  return (
    <article id="skills" className={style.container}>
      <section>
        <h1>{props.content.title}</h1>
        <main>
          {props.content.content}
        </main>
      </section>
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(650, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "fast",
        })}
        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {[
          "VSCode",
          "TypeScript",
          "React",
          "Next",
          "JavaScript",
          "CSS",
          "HTML",
          "Node.js",
          "Postgresql",
          "Express",
          "Mui",
          "Git",
          "GitHub",
          "Kotlin",
          "Swagger",
          "SpringBoot",
          "Storybook",
          "Animation",
        ]}
      </TagCloud>
    </article>
  );
}

export default Skills;
