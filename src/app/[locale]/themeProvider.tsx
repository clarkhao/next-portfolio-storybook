"use client";
import React from "react";
import { useStore } from "@/store";
import HomeSidebar from "@/component/layout/HomeSidebar";
import { getDictionary } from "@/utils";

type TThemeContext = {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * sidebar i18n
   */
  sidebar: Record<string, any>;
}

export default function ThemeContext({ children, ...props }: TThemeContext) {
  const [mode] = useStore((state) => [state.themeMode]);
  const [activeSection, setActiveSection] = React.useState<string>("");
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("article");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight - 100
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
    </div>
  );
}
