"use client";
import React from "react";
import { useStore } from "@/store";
import HomeSidebar from "@/component/layout/HomeSidebar";
import { getDictionary } from "@/utils";
//hooks
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";

type TThemeContext = {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * sidebar i18n
   */
  sidebar: Record<string, any>;
};

export default function ThemeContext({ children, ...props }: TThemeContext) {
  const [mode] = useStore((state) => [state.themeMode]);
  const [activeSection, setActiveSection] = React.useState<string>("");
  const isMobile = useMediaQuery({ maxWidth: 768 });
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("article");
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
          setActiveSection(sections[3].id);
        }
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${mode}-container`}>
      <HomeSidebar
        active={activeSection}
        setActive={setActiveSection}
        content={{
          title: props.sidebar.title,
          whoami: props.sidebar.whoami,
          portfolio: props.sidebar.portfolio,
          skills: props.sidebar.skills,
          contact: props.sidebar.contact,
        }}
      />
      {children}
      {isMobile ? (
        <div className="social-icons">
          <Link href="https://github.com/clarkhao" replace={false}>
            <FaGithub />
          </Link>
          <Link href="https://discordapp.com/users/1091950789255237753">
            <FaDiscord />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
