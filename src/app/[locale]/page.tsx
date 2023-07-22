import dynamic from "next/dynamic";
import React from "react";
//style
import style from "./page.module.css";
//组件
import LaterWhoAmI from "@/component/composite/WhoAmI";
import TopRight from "@/component/layout/TopRight";
import ThemeContext from "./themeProvider";
import { getDictionary } from "@/utils";

const Portfolio = dynamic(() => import("@/component/composite/Portfolio"), {
  ssr: false,
  loading: () => <div className="skeleton"></div>,
});
const Skills = dynamic(() => import("@/component/composite/Skills"), {
  ssr: false,
  loading: () => <div className="skeleton"></div>,
});
const Contact = dynamic(() => import("@/component/composite/Contact"));

async function HomePage({ params }: { params: { locale: string } }) {
  const dict = await getDictionary(params.locale as "cn" | "en" | "jp");

  return (
    <ThemeContext sidebar={dict.sidebar}>
      <div className={style.container}>
        <TopRight size={60} />
        <div className={[style.right, "content"].join(" ")}>
          <LaterWhoAmI content={dict.whoami} locale={params.locale} />
          <Portfolio
            content={{ portfolio: dict.portfolio, modal: dict.modal }}
          />
          <Skills content={dict.skills} />
          <Contact content={dict.contact} />
        </div>
      </div>
    </ThemeContext>
  );
}

export default HomePage;
