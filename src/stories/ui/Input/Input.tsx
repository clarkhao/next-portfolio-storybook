"use client";
//应用
import React, { useRef, useId } from "react";
//style
import style from "./Input.module.css";
//hooks
import { useInput } from "../../../component/utils";
import { useStore } from "../../../store";

export type TInput = {
  /**
   * type indicated icon and input type,
   * 'email'|'password'|'text'|'search'
   */
  type: string;
  /**
   * optional text used in label
   */
  labelText?: string;
  /**
   * value
   */
  value?: string;
  /**
   * input name prop
   */
  name: string;
  /**
   * handleChange used for state bind
   */
  handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * errMsg indicate error returned from data validate and request result
   */
  errMsg?: string;
  /**
   * handleFocus用于在父级中清除errMsg，重新渲染后Input错误消失
   */
  handleFocus: React.FocusEventHandler;
  /**
   * handle enter click event
   */
  handleEnterClick?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * icon component
   */
  icon?: React.ReactNode;
};

function InputUI({ type, value, icon = null, ...props }: TInput) {
  const inputId = useId();
  const { inputState, inputDispatch } = useInput(props.errMsg);
  const [themeMode] = useStore((state) => [state.themeMode]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleControlFocus: React.MouseEventHandler = (e) => {
    e.preventDefault();
    inputRef.current && inputRef.current.focus();
  };
  /**
   * oninput事件更新input中的value
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputDispatch({ type: "set-inputvalue", payload: e.target.value });
  };
  /**
   * onfocus事件时，取消error显示
   */
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputDispatch({ type: "is-err", payload: false });
  };
  return (
    <div
      className={[style.container, inputState.isErr ? style.error : ""].join(
        " "
      )}
    >
      <input
        className={[
          style.input,
          inputState.isErr ? style.error : "",
          icon === null ? "" : style.indent,
          themeMode === "light" ? style.light : style.dark,
        ].join(" ")}
        ref={inputRef}
        id={inputId}
        type={type === "password" ? inputState.pwdToggle.type : type}
        name={props.name}
        value={value ?? inputState.inputValue}
        onInput={props.handleInput ?? handleInputChange}
        onFocus={props.handleFocus ?? handleFocus}
        onKeyDown={props.handleEnterClick}
        placeholder={props.labelText}
      />

      {type === "search" ? null : (
        <label className={style.label} htmlFor={inputId}></label>
      )}
      {icon === null ? null : (
        <span className={style.licon} onClick={handleControlFocus}>
          {icon}
        </span>
      )}
    </div>
  );
}

export default InputUI;
