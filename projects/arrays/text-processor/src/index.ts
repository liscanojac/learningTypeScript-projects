// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.

type OptionsType = {
	width: number;
	align?: "left" | "right" | "middle";
};

type Options = {
	width: number;
	align: "left" | "right" | "middle";
};

export function alignTexts(texts: string[], options: OptionsType): string[][] {
	let resultArr: string[][] = [];

	for (let i = 0; i < texts.length; i++) {
		resultArr.push(
			strHandler(texts[i], {
				align: "left",
				...options,
			})
		);
	}

	return resultArr;
}

function strHandler(str: string, options: Options): Array<string> {
	if (str.length > options.width) {
		return chunkStr(str, options);
	}

	return [padStr(str, options)];
}

function chunkStr(str: string, options: Options): Array<string> {
	const resultArr: Array<string> = [];
	const strArr = str.split(" ");

	for (let i = 0; i < strArr.length; i++) {
		resultArr.push(padStr(strArr[i], options));
	}
	return resultArr;
}

function padStr(str: string, options: Options): string {
	const alignOptions = {
		left: () => str.padEnd(options.width),
		right: () => str.padStart(options.width),
		middle: () => {
			const gap = options.width - str.length;
			const gapLeft = Math.floor(gap / 2);
			const gapRight = Math.ceil(gap / 2);

			return " ".repeat(gapLeft) + str + " ".repeat(gapRight);
		},
	};

	return alignOptions[options.align]();
}
