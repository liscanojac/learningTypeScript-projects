// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.

type Coordinates = [number, number, number];

export interface City {
	coordinates: {
		north: Coordinates;
		west: Coordinates;
	};
	name: string;
	catchphrase?: string;
}

export function describeCity(city: City): string {
	const message: Array<string> = [`${city.name}, New York`];

	if (city.catchphrase) {
		message.push(`* "${city.catchphrase}"`);
	}

	message.push(
		`* Located at ${describeCoordinates(
			city.coordinates.north
		)}N ${describeCoordinates(city.coordinates.west)}W`
	);

	return message.join("\n");
}

function describeCoordinates(coordinates: Coordinates): string {
	const coordinateUnits = ["°", `'`, `"`];
	const coordinatesMessage: Array<string> = [];
	for (let i = 0; i < coordinates.length; i++) {
		coordinatesMessage.push(
			`${coordinates[i] < 10 ? `0${coordinates[i]}` : coordinates[i]}${
				coordinateUnits[i]
			}`
		);
	}

	return coordinatesMessage.join("");
}
