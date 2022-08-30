import { useEffect, useState } from "react";

function ValuesSelector(props) {

    const PATH = props.path;
    const [optionValues, setOptionValues] = useState([]);
    const [currentValue, setCurrentValue] = useState("notSelectable");

    const getValuesList = async () => {
        const REQUEST_URL = "http://localhost:4567" + PATH;
        let request = await fetch(REQUEST_URL);
        let response = await request.json();
        setOptionValues(response);
    };

    useEffect(() => {getValuesList()}, []);

    const updateCurrentValue = event => {
        let value = event.target.value;
        setCurrentValue(value);
        props.onChange(value);
        //console.log("Current value: " + value);
    };
    
    return (
        <div className="selector-wrapper">
            <select id={"select-" + props.name}  value={currentValue} onChange={updateCurrentValue}>
                <option hidden value="notSelectable">Select a {props.name}</option>
                {optionValues.map(value =>
                    <option value={value}>{value}</option>
                )}
            </select>
        </div>
    );
}

export default ValuesSelector;