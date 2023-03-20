// Write your groupLandmarks function here! ✨
// You'll need to export it so the tests can run it.

interface BaseLandmark {
	name: string;
	type: string;
}

interface Mountain extends BaseLandmark {
	type: "mountain";
	height: number;
}

interface Park extends BaseLandmark {
	type: "park";
	acres: number;
}

interface Lighthouse extends BaseLandmark {
	type: "lighthouse";
	height: number;
	lit: number;
}

interface Lake extends BaseLandmark {
	type: "lake";
	miles: number;
}

interface Waterfall extends BaseLandmark {
	type: "waterfall";
	height: number;
}

interface River extends BaseLandmark {
	type: "river";
	depth: number;
	length: number;
}

interface Fort extends BaseLandmark {
	type: "fort";
}

type Landmark = Mountain | Park | Lighthouse | Lake | Waterfall | River | Fort;

export function describeLandmark(landmark: Landmark): string {
	const message: Array<string> = [
		`${landmark.name} is a ${landmark.type} in Upstate New York.`,
	];

	switch (landmark.type) {
		case "lake":
			message.push(`It covers ${landmark.miles} square miles of water.`);
			break;
		case "lighthouse":
			message.push(
				`It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
			);
			break;
		case "mountain":
			message.push(`Its peak is ${landmark.height} feet high.`);
			break;
		case "park":
			message.push(`It covers ${landmark.acres} square acres.`);
			break;
		case "river":
			message.push(
				`It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
			);
			break;
		case "waterfall":
			message.push(`It is ${landmark.height} feet high.`);
			break;
	}
	return message.join("\n");
}
