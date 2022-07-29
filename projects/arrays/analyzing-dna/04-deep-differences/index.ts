// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

type DeepDifferencesArray =
	| (DeepDifferencesArray | string | undefined)[]
	| undefined
	| string;
// you can use recursive typing in TS this comes handy for recursive functions

export function deepDifferences(
	arrayOne: DeepDifferencesArray,
	arrayTwo: DeepDifferencesArray
): DeepDifferencesArray {
	const isArrayOneAnArray = Array.isArray(arrayOne);
	const isArrayTwoAnArray = Array.isArray(arrayTwo);

	if (!isArrayOneAnArray || !isArrayTwoAnArray) {
		if (arrayOne === arrayTwo) {
			return arrayOne;
		}
		return undefined;
	}
	if (arrayOne.length !== arrayTwo.length) {
		return undefined;
	}
	const resultArray: DeepDifferencesArray = [];

	for (let i = 0; i < arrayOne.length; i++) {
		resultArray.push(deepDifferences(arrayOne[i], arrayTwo[i]));
	}
	return resultArray;
}
