import {useDispatch, useSelector} from "react-redux";
import {countSelector, maxSelector, minSelector} from "../../../redux/selectors";
import s from "../../OneScreen/OneScreen.module.css";
import {Button} from "../../Button/Button";
import {incrementAC, resetCountAC} from "../../../redux/reducer";
import React from "react";

type PropsType = { click?: (trueOnly: true) => void };

export function ButtonsOnCounterScreen(props: PropsType) {
    const max = useSelector(maxSelector)
    const min = useSelector(minSelector)
    const count = useSelector(countSelector)
    const dispatch = useDispatch()
    return <div className={s.buttons}>
        <Button disabled={count >= max} callback={() => dispatch(incrementAC())}>inc</Button>
        <Button disabled={count === min} callback={() => dispatch(resetCountAC())}>reset</Button>
        {props.click && <Button callback={() => props.click && props.click(true)} disabled={false}>set</Button>}
    </div>;
}