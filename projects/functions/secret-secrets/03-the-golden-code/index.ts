// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

type MakeGuessFunction = (text: string, attempt: number) => string;
type ValidateGuessFunction = (guess: string) => boolean;
type CreateAdvancedCipherFunction = (text: string) => string | undefined;

type CodeCrackerParam = {
	attempts: number;
	makeGuess: MakeGuessFunction;
	validateGuess: ValidateGuessFunction;
};

function createCodeCracker({
	attempts,
	makeGuess,
	validateGuess,
}: CodeCrackerParam): CreateAdvancedCipherFunction {
	const createAdvancedCipher: CreateAdvancedCipherFunction = (text) => {
		for (let i = 0; i < attempts; i++) {
			let guess = makeGuess(text, i);

			if (validateGuess(guess)) return guess;
		}
		return undefined;
	};
	return createAdvancedCipher;
}

export { createCodeCracker };
