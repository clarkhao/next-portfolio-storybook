"use client";
//应用
import React from "react";
import { useStore } from "../../store";
//style
import style from "./Selector.module.css";
//组件
import { FiGlobe } from "react-icons/fi";
import Menu from "./Menu";
//hooks
import { useParams, useRouter } from "next/navigation";

type TSelect = {};

function Selector({ ...props }: TSelect) {
  const params = useParams();
  const router = useRouter();

  const [hash, toggleI18n, themeMode] = useStore((state) => [
    state.hash,
    state.toggleI18n,
    state.themeMode,
  ]);

  const [inProp, setInProp] = React.useState(false);

  const handleSelect = (e: React.MouseEvent) => {
    e.preventDefault();
    setInProp(!inProp);
  };
  const handleElement = (v: string) => {
    toggleI18n(v as "cn" | "en" | "jp");
    router.push(`/${v as "cn" | "en" | "jp"}${hash}`);
    setInProp(false);
  };
  React.useEffect(() => {
    toggleI18n(params.locale as "cn" | "en" | "jp");
  }, [params.locale, toggleI18n]);

  React.useEffect(() => {
    const mouseHandler = (e: MouseEvent) => {
      const dropdown = document.querySelector("#i18n-show");
      const button = document.querySelector("#i18n-btn") as Node;
      if (dropdown && !button.contains(e.target as Node)) {
        setInProp(false);
      }
    };
    window.addEventListener("click", mouseHandler);
    return () => {
      window.removeEventListener("click", mouseHandler);
    };
  }, []);
  return (
    <div
      id="i18n-btn"
      className={[
        style.btn,
        themeMode === "light" ? style.light : style.dark,
      ].join(" ")}
      onClick={handleSelect}
    >
      <FiGlobe />
      <span className={style.title}>
        {(params.locale as string).toUpperCase() ?? "CN"}
      </span>
      <Menu
        id="i18n-show"
        isShown={inProp}
        handleElement={handleElement}
        content={["cn", "en", "jp"]}
      />
    </div>
  );
}

export default Selector;
