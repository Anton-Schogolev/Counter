import {useDispatch} from "react-redux";
import {setSettingsAC} from "../../../redux/reducer";
import s from "../SetComponent.module.css";
import {Button} from "../../Button/Button";
import React from "react";

type PropsType = {
    start: number, max: number,
    needMoreButtons: undefined | boolean,
    disabled: boolean,
    setClick?: (falseOnly: false) => void
}

export function ButtonsOnSetScreen(props: PropsType) {
    const dispatch = useDispatch()
    const set = () => {
        if (props.start >= 0 && props.start < props.max) {
            dispatch(setSettingsAC(props.start, props.max))
            props.setClick && props.setClick(false)
        }
    }
    return <div className={s.buttons}>
        {props.needMoreButtons && <>
            <Button disabled={true}>inc</Button>
            <Button disabled={true}>reset</Button>
        </>}
        <Button disabled={props.disabled} callback={set}>set</Button>
    </div>;
}