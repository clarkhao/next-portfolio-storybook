import React from "react";
//style
import style from "./TopRight.module.css";
//组件
import ThemeToggleUI from "../../stories/ui/ThemeToggle/ThemeToggle";
import Selector from "../ui/Selector";

type TThemeI18nLayout = {
  /**
   * left
   */
  left: React.ReactNode;
  /**
   * right
   */
  right: React.ReactNode;
};
type TThemeI18n = {
  /**
   * size
   */
  size: number;
};

function ThemeI18nLayout({ left, right, ...props }: TThemeI18nLayout) {
  return (
    <div className={style.container}>
      {left}
      {right}
    </div>
  );
}
function TopRight({ size = 60, ...props }: TThemeI18n) {
  return (
    <>
      <ThemeI18nLayout left={<Selector />} right={<ThemeToggleUI />} />
    </>
  );
}

export default TopRight;
