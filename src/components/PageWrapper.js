function PageWrapper(props) {
    return (
        <div id="page-wrapper">
            {props.children}
        </div>
    );
}

export default PageWrapper;