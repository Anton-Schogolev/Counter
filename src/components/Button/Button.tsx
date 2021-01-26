import React from "react";
import s from "./Button.module.css"
type ButtonType = {
    callback?: () => void
    disabled?:boolean
}

export const Button: React.FC<ButtonType> = (
    {
        children,
        callback,
        disabled
    }) => {
    return (
        <button disabled={disabled} className={s.button} onClick={callback}>{children}</button>
    )
}