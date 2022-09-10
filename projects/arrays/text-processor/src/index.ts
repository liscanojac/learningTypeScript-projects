// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.

type OptionsType = {
	width: number;
	align?: "left" | "right" | "middle";
};

export function alignTexts(texts: string[], options: OptionsType): string[][] {
	let resultArr: string[][] = [];

	for (let i = 0; i < texts.length; i++) {
		resultArr.push(strHandler(texts[i], options));
	}
	return resultArr;
}

function strHandler(
	str: string,
	{ align = "left", width }: OptionsType
): Array<string> {
	if (str.length > width) {
		return chunkStr(str, { align, width });
	}

	return [padStr(str, { align, width })];
}

function chunkStr(
	str: string,
	{ align = "left", width }: OptionsType
): Array<string> {
	const resultArr: Array<string> = [];
	const strArr = str.split(" ");

	for (let i = 0; i < strArr.length; i++) {
		resultArr.push(padStr(strArr[i], { align, width }));
	}
	return resultArr;
}

function padStr(str: string, { align = "left", width }: OptionsType): string {
	const alignOptions = {
		left: () => str.padEnd(width),
		right: () => str.padStart(width),
		middle: () => {
			const gap = width - str.length;
			const gapLeft = Math.floor(gap / 2);
			const gapRight = Math.ceil(gap / 2);

			return " ".repeat(gapLeft) + str + " ".repeat(gapRight);
		},
	};

	return alignOptions[align]();
}
