//应用
import React, { Fragment } from "react";
//style
import style from "./Menu.module.css";
//hook
import { useStore } from "../../store";

type TMenu = {
  /**
   * isShown
   */
  isShown: boolean;
  /**
   *
   */
  handleElement: (el: string) => void;
  /**
   * content
   */
  content: Array<string>;
  /**
   * id
   */
  id: string;
};

function Menu({
  isShown = true,
  handleElement,
  content = ["cn", "en", "jp"],
  ...props
}: TMenu) {
  const [themeMode] = useStore((state) => [state.themeMode]);
  return (
    <Fragment>
      <ul
        id={props.id}
        className={[
          style.drop_down_content,
          isShown ? style.show : "",
          themeMode === "light" ? style.light : style.dark,
        ].join(" ")}
      >
        {content.map((v, i) => (
          <li
            key={`menu-item-${i}`}
            onClick={(e) => {
              e.preventDefault;
              e.stopPropagation();
              handleElement(v);
            }}
          >
            {v}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Menu;
