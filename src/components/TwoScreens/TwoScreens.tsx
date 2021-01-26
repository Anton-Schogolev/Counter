import React from "react";
import {Counter} from "../Counter/Counter";
import {SetComponent} from "../SetComponent/SetComponent";

export const TwoScreens: React.FC = () => {
    return (
        <>
            <Counter oneScreenMode={false}/>
            <SetComponent needMoreButtons={false}/>
        </>
    )
}