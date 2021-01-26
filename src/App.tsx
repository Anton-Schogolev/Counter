import React, {useState} from 'react';
import './App.css';
import {OneScreen} from "./components/OneScreen/OneScreen";
import {Button} from "./components/Button/Button";
import {TwoScreens} from "./components/TwoScreens/TwoScreens";


function App() {
    const [oneScreenMode, setOneScreenMode] = useState<boolean>(false)
    const toggleHandler = () => setOneScreenMode(!oneScreenMode)
    return (
        <div className="App">
            <Button callback={toggleHandler}>toggle</Button>
            {oneScreenMode ? <OneScreen/>
                : <TwoScreens/>}
        </div>
    );
}

export default App;
