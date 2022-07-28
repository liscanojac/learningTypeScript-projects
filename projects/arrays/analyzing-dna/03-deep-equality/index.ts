// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function deepEquality(
	arrayOne: string[][],
	arrayTwo: string[][]
): boolean {
	if (arrayOne.length === arrayTwo.length) {
		return JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
	}
	return false;
}
