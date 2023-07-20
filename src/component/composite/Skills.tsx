"use client";
//应用
import React from 'react';
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

function Skills({ ...props }: TSkills) {
  React.useEffect(() => {
    console.log(window.innerWidth)
  }, [])
  return (
    <article id="skills" className={[style.container, 'skills'].join(" ")}>
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
          "Surrealdb",
          "Express",
          "Mui",
          "Git",
          "GitHub",
          "Kotlin",
          "Swagger",
          "SpringBoot",
          "Storybook",
          "Animation",
          "Figma"
        ]}
      </TagCloud>
    </article>
  );
}

export default Skills;
