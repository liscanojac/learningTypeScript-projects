// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.

type StringsArray = string[];

export function shallowEquality(
	arrayOne: StringsArray,
	arrayTwo: StringsArray
): boolean {
	if (arrayOne.length === arrayTwo.length) {
		for (let i = 0; i < arrayOne.length; i++) {
			if (arrayOne[i] !== arrayTwo[i]) {
				return false;
			}
		}
		return true;
	}
	return false;
}
