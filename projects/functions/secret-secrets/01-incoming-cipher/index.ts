// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.
type CipherFunction = (character: string) => string;

function createCipher(cipher: CipherFunction) {
	function loopThroughMessage(message: string) {
		let cipheredMessage = "";

		for (let i = 0; i < message.length; i++) {
			cipheredMessage += cipher(message[i]);
		}
		return cipheredMessage;
	}
	return loopThroughMessage;
}

// function createCipher(cipher: CipherFunction) {

//   function loopThroughMessage(message: string) {

//     const map = Array.prototype.map;
//     const cipheredMessage = map.call(message, (character: string) => cipher(character))

//     return cipheredMessage.join('');
//   }
//   return loopThroughMessage;
// }

export { createCipher };
