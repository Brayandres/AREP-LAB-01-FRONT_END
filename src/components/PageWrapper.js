import TopBar from "./TopBar";

function PageWrapper(props) {
    return (
        <div id="page-wrapper">
            <TopBar/>
            {props.children}
        </div>
    );
}

export default PageWrapper;