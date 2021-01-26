import React, {useState} from "react";
import {SetComponent} from "../SetComponent/SetComponent";
import {Counter} from "../Counter/Counter";

export const OneScreen: React.FC = () => {
    const [showSet, setShowSet] = useState<boolean>(false)
    return (
        <>
            {!showSet ? <Counter oneScreenMode={true} setClick={setShowSet}/>
                : <SetComponent setClick={setShowSet} needMoreButtons={true}/>}
        </>
    )
}