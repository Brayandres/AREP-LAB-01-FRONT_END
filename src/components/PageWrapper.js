import TopBar from "./TopBar";

function PageWrapper(props) {
    return (
        <>
            <TopBar/>
            {props.children}
        </>
    );
}

export default PageWrapper;