"use client";
//应用
import React, { Fragment } from "react";
import { useStore } from "../../store";
//style
import style from "./ThemeToggle.module.css";
//组件
import { FiSun, FiMoon } from "react-icons/fi";

type SwitchType = {
  /**
   * is svg icon needed?
   */
  isSvg?: boolean;
};

function ThemeToggle({ isSvg = true, ...props }: SwitchType) {
  const id = React.useId();
  const [themeMode, toggleTheme] = useStore((state) => [
    state.themeMode,
    state.toggleTheme,
  ]);
  const [toggle, setToggle] = React.useState(themeMode === "dark");

  const handleClick = () => {
    setToggle(!toggle);
    if (toggle) toggleTheme("light");
    else toggleTheme("dark");
  };
  return (
    <Fragment>
      <input
        className={style.input}
        type="checkbox"
        id={id}
        name="theme-toggle"
      />
      <label
        className={[style.label, toggle ? style.light : ""].join(" ")}
        htmlFor={id}
        onClick={handleClick}
      >
        <span
          className={[style.toggle, toggle ? style.svg : ""].join(" ")}
        >
          {isSvg ? toggle ? <FiMoon /> : <FiSun /> : null}
        </span>
      </label>
    </Fragment>
  );
}

export default ThemeToggle;
