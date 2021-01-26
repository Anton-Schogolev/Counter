import React from "react";
import s from "./SetMinMax.module.css"
import {TextAndInput} from "./TextAndInput/TextAndInput";
import {useSelector} from "react-redux";
import {errorSelector} from "../../redux/selectors";

type PropsType = {
    start: number
    setStart: (start: number) => void
    max: number
    setMax: (max: number) => void
}

export const SetMinMax = (props: PropsType) => {
    const error = useSelector(errorSelector)
    return (
        <div className={s.screen}>
            <TextAndInput
                error={error === "Max has to be bigger than start."}
                value={props.max} changeValue={props.setMax}
            >
                max value:
            </TextAndInput>
            <TextAndInput
                error={Boolean(error)}
                value={props.start}
                changeValue={props.setStart}
            >
                start value:
            </TextAndInput>
        </div>
    )
}