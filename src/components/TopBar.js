function TopBar() {

    const IMG_SRC = "data:image/png;base64,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";

    return (
        <div id="topBarContainer">
            <div id="leftSideTopBar">
                <img id="eci-logo" src={IMG_SRC} alt="LOGO"/>
                <p id="leftSide-text">
                    ECI<br />
                    SERVICES
                </p>
            </div>
            <div id="centerSideTopBar">
                <p id="topBar-title">
                    Stock Market Consultant
                </p>
            </div>
            <div id="rightSideTopBar">
            </div>
        </div>
    );
}

export default TopBar;