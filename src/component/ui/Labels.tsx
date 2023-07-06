//style
import style from "./Labels.module.css";
//组件

type TLabels = {
  /**
   * a list of skills
   */
  list?: Array<string>;
};

function Labels({
  list = ["Frontend", "HTML", "CSS", "Typescript", "Animation"],
  ...props
}: TLabels) {
  return (
    <div className={style.container}>
      <div className={style.group}>
        {list.map((el, i) => {
          return (
            <span
              key={`label_${i}`}
              className={style.item}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              {el}
            </span>
          );
        })}
      </div>
      <span
        className={[style.item, style.more].join(" ")}
        style={{ animationDelay: `${0.2 * list.length}s` }}
      >
        more...
      </span>
    </div>
  );
}

export default Labels;
