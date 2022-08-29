function ResultsTable(props) {

	const {
		data = {},
		specificProperty = ""
	} = props;

    const searchProperty = (object, propName) => {
		let value = (Object.keys(object).length === 0 || propName === "");
		console.log("Value: " + value);
		if (!value) {
			console.log("OBJECT: " + JSON.stringify(object));
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
			if (object != null) return object;
		}
		else {
			return object;
		}
	};

    const iterableData = searchProperty(data, specificProperty);

    const fillDataInTable = object => {
        console.log("\n   Length: " + Object.keys(object).length);
		console.log("    PROCESED:\n" + Object.values(object));
        return <p>ZZZZZ....</p>;
    };

    return (
        <div>
            {fillDataInTable(iterableData)}
        </div>
    );
}

export default ResultsTable;