import React from "react";
import s from "./Screen.module.css"
import {useSelector} from "react-redux";
import {countSelector, errorSelector, maxSelector} from "../../redux/selectors";

export const Screen: React.FC = () => {
    const max = useSelector(maxSelector)
    const error = useSelector(errorSelector)
    const count = useSelector(countSelector)
    const screenClass = `${s.screen} ${error ? s.error : (count === max ? s.screen5 : "")}`
    return (
        <div className={screenClass}>{error ? error : count}</div>
    )
}