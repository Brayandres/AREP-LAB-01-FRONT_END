function ResultsTable(props) {

	let wasProcesed = false;

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
			if (object != null) {
				wasProcesed = true;
				return object;
			}
			else {
				return {};
			}
		}
		else {
			return object;
		}
	};

    const iterableData = searchProperty(data, specificProperty);

    const fillDataInTable = object => {
        //console.log("\n   Length: " + Object.keys(object).length);
		//console.log("    PROCESED:\n" + Object.values(object));
		if (wasProcesed) {
			const keys = Object.keys(object);
			const values = Object.values(object);
			return (
				<table>
					<thead>
						<tr>
							<th>Period</th>
							{Object.keys(values[0]).map(tittle => 
								<th>{tittle.slice(tittle.indexOf(" ") + 1)}</th>
							)}
						</tr>
					</thead>
					<tbody>
						{keys.map((key, position = 0) => 
							<tr>
								<td>{key}</td>
								{Object.values(values[position]).map(value =>
									<td>{value}</td>
								)}
							</tr>
						)}
					</tbody>
				</table>
			);
		}
    };

    return (
        <div>
            {fillDataInTable(iterableData)}
        </div>
    );
}

export default ResultsTable;