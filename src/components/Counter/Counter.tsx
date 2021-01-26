import React from "react";
import s from "../OneScreen/OneScreen.module.css";
import {Screen} from "../Screen/Screen";
import {ButtonsOnCounterScreen} from "./ButtonsOnCounterScreen/ButtonsOnCounterScreen";

type PropsType = {
    oneScreenMode: boolean
    setClick?: (trueOnly: true) => void
}

export const Counter: React.FC<PropsType> = (
    {
        oneScreenMode,
        setClick,
    }) => {
    return (<div className={`${s.container} ${oneScreenMode ? "" : s.right}`}>
        <Screen/>
        <ButtonsOnCounterScreen click={setClick}/>
    </div>)
}

