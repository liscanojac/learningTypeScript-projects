// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

type CipherFunction = (character: string) => string;

function createAdvancedCipher(
	onVowel: CipherFunction,
	onConsonant: CipherFunction,
	onPunctuation: CipherFunction
) {
	function loopThroughMessage(message: string) {
		const vowels = "aeiou";
		const consonants = "bcdfghjklmnpqrstvwxyz";
		let cipheredMessage = "";

		for (let i = 0; i < message.length; i++) {
			if (vowels.indexOf(message[i]) >= 0) {
				cipheredMessage += onVowel(message[i]);
				continue;
			}
			if (consonants.indexOf(message[i]) >= 0) {
				cipheredMessage += onConsonant(message[i]);
				continue;
			}
			cipheredMessage += onPunctuation(message[i]);
		}
		return cipheredMessage;
	}
	return loopThroughMessage;
}

export { createAdvancedCipher };
