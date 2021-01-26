import React, {ChangeEvent} from "react";
import s from "./TextAndInput.module.css";

type PropsType = {
    value: number
    changeValue: (start: number) => void
    error: boolean
}

export const TextAndInput: React.FC<PropsType> = (
    {
        value,
        changeValue,
        error,
        children}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(Math.floor(e.currentTarget.valueAsNumber))
    }
    return (
        <>
            <div className={s.text}><b>{children}</b></div>
            <input type={"number"} onChange={onChangeHandler} value={value} className={`${s.input} ${error? s.error: ""}`}/>
        </>
    )
}