import s from "./SetComponent.module.css";
import {SetMinMax} from "../SetMinMax/SetMinMax";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkAC} from "../../redux/reducer";
import {errorSelector, maxSelector, minSelector} from "../../redux/selectors";
import {ButtonsOnSetScreen} from "./ButtonsOnSetScreen/ButtonsOnSetScreen";

type PropsType = {
    setClick?: (toggle: boolean) => void
    needMoreButtons?: boolean
}


export const SetComponent = (props: PropsType) => {
    const error = useSelector(errorSelector)
    const minValue = useSelector(minSelector)
    const maxValue = useSelector(maxSelector)
    const dispatch = useDispatch()
    const [start, setStart] = useState<number>(minValue)
    const [max, setMax] = useState<number>(maxValue)
    const buttonSetDisabled = (Boolean(error)
        || (!props.needMoreButtons
            && (start === minValue && max === maxValue)))

    const setStartHandler = (start: number) => {
        setStart(start)
        dispatch(checkAC(start, max))
    }
    const setMaxHandler = (max: number) => {
        setMax(max)
        dispatch(checkAC(start, max))
    }
    return (
        <div className={`${s.setContainer} ${props.needMoreButtons ? s.center : ""}`}>
            <SetMinMax max={max} setMax={setMaxHandler} start={start} setStart={setStartHandler}/>
            <ButtonsOnSetScreen start={start} max={max} needMoreButtons={props.needMoreButtons} disabled={buttonSetDisabled}
                                setClick={props.setClick}/>
        </div>
    )
}

