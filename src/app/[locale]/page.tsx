//style
import style from "./page.module.css";
//组件
import LaterWhoAmI from "@/component/composite/WhoAmI";
import TopRight from "@/component/layout/TopRight";
import Portfolio from "@/component/composite/Portfolio/index";
import Skills from "@/component/composite/Skills";
import Contact from "@/component/composite/Contact";
import ThemeContext from "./themeProvider";
import { getDictionary } from "@/utils";

async function HomePage({ params }: { params: { locale: string } }) {
  const dict = await getDictionary(params.locale as "cn" | "en" | "jp");
  console.log(dict.modal);
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
