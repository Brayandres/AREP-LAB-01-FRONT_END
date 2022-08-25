function ResultsTable(props) {

    const DATA_OBJECT = props.data;
    const PROPERTY_WITH_DATA = props.specificProperty;

    const searchProperty = (object, propName) => {
		let propertyHasBeenFound = false;
		while (!propertyHasBeenFound) {
			let lastKey;
			for (let key in object) {
				lastKey = key;
				if (key === propName) {
					propertyHasBeenFound = true;
					break;
				}
				else if ((object[key]).hasOwnProperty(propName)) {
					break;
				}
			}
			object = object[lastKey];
		}
		if (object != null)
			return object;
	};

    const data = searchProperty(DATA_OBJECT, PROPERTY_WITH_DATA);

    const fillDataInTable = object => {
        console.log("   Length: " + Object.keys(object).length);
        return <p>ZZZZZ....</p>;
    };

    return (
        <div>
            {fillDataInTable(data)}
        </div>
    );
}

export default ResultsTable;