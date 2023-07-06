//style
import style from "./HomeSidebar.module.css";
//hook
import { useStore } from "../../store";
//component
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

type THomeSidebar = {
  /**
   * active section
   */
  active: string;
  /**
   * active setter
   */
  setActive: React.Dispatch<React.SetStateAction<string>>;
  /**
   * content
   */
  content: Record<string, any>;
};

function HomeSidebar({ ...props }: THomeSidebar) {
  const [themeMode, i18n, toggleHash] = useStore((state) => [state.themeMode, state.i18n, state.toggleHash]);
  const path = usePathname();
  console.log(path)
  return (
    <div
      className={[
        style.container,
        themeMode === "light" ? style.light : style.dark,
      ].join(" ")}
    >
      <div
        className={[
          style.title,
          themeMode === "light" ? style.lightTitle : style.darkTitle,
        ].join(" ")}
      >
        {props.content['title']}
      </div>
      <div className={style.side}>
        <ul>
          {["whoami", "portfolio", "skills", "contact"].map((el) => {
            return (
              <Link
                href={{ pathname: `/${i18n}`, hash: `#${el}` }}
                key={el}
                onClick={() => {
                  props.setActive(el);
                  toggleHash(`#${el}`);
                }}
              >
                <li className={props.active === el ? style.active : ""}>
                {props.content[el]}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={style.social}>
        <Link href="https://github.com/clarkhao" replace={false}>
          <FaGithub />
        </Link>
        <Link href="https://discordapp.com/users/1091950789255237753">
          <FaDiscord />
        </Link>
      </div>
    </div>
  );
}

export default HomeSidebar;
