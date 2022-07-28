// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

type ArrayReturned = (string | undefined)[];

export function shallowDifferences(
	arrayOne: string[],
	arrayTwo: string[]
): ArrayReturned | undefined {
	if (arrayOne.length === arrayTwo.length) {
		const resultArr: ArrayReturned = [];

		for (let i = 0; i < arrayOne.length; i++) {
			if (arrayOne[i] === arrayTwo[i]) {
				resultArr.push(arrayOne[i]);
				continue;
			}
			resultArr.push(undefined);
		}
		return resultArr;
	}
	return undefined;
}
