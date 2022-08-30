import React, { useEffect, useState } from 'react';
import './App.css';
import PageWrapper from './components/PageWrapper';
import ResultsTable from './components/ResultsTable';
import ValuesSelector from './components/ValuesSelector';

function App() {

    const PATH = "/checkStocks";

    const [stockSymbol, setStockSymbol] = useState("");
    const [timeframeValue, setTimeframeValue] = useState("notSelectable");
    const [timeIntervalValue, setTimeIntervalValue] = useState("notSelectable");
    const [responseData, setResponseData] = useState([{"":""}, {}]);
    const [dataTable, setDataTable] = useState(<></>);

    const makeRequest = async () => {
        const PARAMS = "?symbol=" + stockSymbol + "&function=" + timeframeValue + "&interval=" + timeIntervalValue;
        let request = await fetch("http://localhost:4567" + PATH + PARAMS);
        let response = await request.json();
        setResponseData(response);
    };

    useEffect(() => {
        const manageTimeIntervalSelectorVisibility = () => {
            if (timeframeValue === "INTRA_DAY") {
                document.getElementById("select-TimeInterval").style.display = "block";
            } else {
                document.getElementById("select-TimeInterval").style.display = "none";
            }
        };
        manageTimeIntervalSelectorVisibility();
    }, [timeframeValue]);

    const prepareRequest = () => {
        if (timeIntervalValue !== "notSelectable" || (timeframeValue !== "notSelectable" && timeframeValue !== "INTRA_DAY")) {
            makeRequest();
        }
        else {
            alert("No se ha podido realizar la solictud!");
        }
    };

    useEffect(() => {
        const showResults = () => {
            let property = Object.values(responseData[0])[0];
            let dataBody = responseData[1];
            setDataTable(<ResultsTable data={dataBody} specificProperty={property}/>);
        };
        showResults();
    }, [responseData]);

    return (
        <PageWrapper>
            <div id='top-text-container'>
                <p id='initial-message'>
                    <b>STOCK MARKET API</b><br/>
                    The following service allows you to check the current status of the stock market based on the parameters you configure
                    to obtain information. The meaning of each of the parameters is explained in more detail below.
                </p>
                <p className='parameter-especification'>
                    <b>Stock Symbol:</b><br/>A stock symbol is an abbreviation that refers to a company's share listed on stock exchanges.
                    It is a unique code comprising a set of characters, i.e., letters, numbers, or a combination of both. It is used to distinguish
                    a particular stock from the other securities.
                </p>
                <p className='parameter-especification'>
                    <b>Timeframe:</b><br/>Represents the time series or periodicity of the information to be obtained.
                </p>
                <p className='parameter-especification'>
                    <b>TimeInterval*:</b><br/>Represents the elapsed time interval between two consecutive data points in the time series. Each
                    datum retains the same time distance with each consecutive datum.
                </p>
                <p className='parameter-especification' id='note-about-section-timeinterval'>
                    <b>(* TimeInterval will only be available for the <i>INTRA_DAY</i> option of Timeframe.)</b>
                </p>
            </div>
            <div id='parameters-container'>
                <input className='parameters' id='input-symbol' type="text" placeholder="Stock Symbol" value={stockSymbol}
                    onChange={event => setStockSymbol(event.target.value)}
                />
                <ValuesSelector name="Timeframe"    path="/getTimeframes"    onChange={setTimeframeValue}/>
                <ValuesSelector name="TimeInterval" path="/getTimeIntervals" onChange={setTimeIntervalValue}/>
            </div>
            <div id='btn-container'>
                <button className='parameters' id='get-info-btn' onClick={prepareRequest}>Get{'\u00A0'} Info</button>
            </div>
            <div id="results-table-wrapper">
                {dataTable}
            </div>
        </PageWrapper>
    );
}

export default App;