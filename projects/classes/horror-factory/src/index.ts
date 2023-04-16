// Write your class and functions here! ✨
// You'll need to export the class and functions so the tests can run it.

interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

interface Character {
	name: string;
	isEvil(): boolean;
	getPowerFrom(previouslyConsumed: Consumed): number;
}

export class Horror {
	readonly name: string;

	#consumed: Array<Consumed> = [];
	#power: number = 0;

	// this is how you declare methods that later are going to be declared inside the constructor
	protected isEvil: () => boolean;
	#getPowerFrom: (previouslyConsumed: Consumed) => number;

	constructor({ name, isEvil, getPowerFrom }: Character) {
		this.name = name;
		this.isEvil = isEvil;
		this.#getPowerFrom = getPowerFrom;
	}

	getPower(): number {
		return this.#power;
	}

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}

	#consume(opponent: Horror) {
		const consumedOpponent: Consumed = {
			name: opponent.name,
			power: opponent.getPower(),
			evil: opponent.isEvil(),
		};

		this.#consumed.push(consumedOpponent);
		this.#power += this.#getPowerFrom(consumedOpponent) + 1;
	}
}

export function createDemon(): Horror {
	const demon = {
		name: "Demon",
		getPowerFrom(consumed: Consumed) {
			return consumed.evil ? consumed.power / 2 : consumed.power * 2;
		},
		isEvil() {
			return true;
		},
	};

	return new Horror(demon);
}

export function createSorcerer(name: string, evil: boolean): Horror {
	const sorcerer = {
		name,
		getPowerFrom(consumed: Consumed) {
			// this class will maintain the equality to the isEvil due to the fucntion context
			return consumed.evil === evil ? consumed.power * 2 : consumed.power;
		},
		isEvil() {
			return evil;
		},
	};

	return new Horror(sorcerer);
}
