// Write your classes here! ✨
// You'll need to export them so the tests can run them.

interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	abstract readonly name: string;

	#consumed: Array<Consumed> = [];
	#power: number = 0;

	protected abstract isEvil(): boolean;
	protected abstract getPowerFrom(previouslyConsumed: Consumed): number;

	getPower(): number {
		return this.#power;
	}

	doBattle(opponent: Horror) {
		if (this.getPower >= opponent.getPower) {
			this.#consume(opponent);
		}
	}

	#consume(opponent: Horror) {
		const opponentConsumed: Consumed = {
			name: opponent.name,
			power: opponent.getPower(),
			evil: opponent.isEvil(),
		};

		this.#consumed.push(opponentConsumed);
		this.#power += this.getPowerFrom(opponentConsumed) + 1;
	}
}

export class Demon extends Horror {
	readonly name: string = "Demon";
	#evil: boolean = true;

	isEvil(): boolean {
		return this.#evil;
	}

	getPowerFrom(previouslyConsumed: Consumed): number {
		return previouslyConsumed.evil
			? previouslyConsumed.power / 2
			: previouslyConsumed.power * 2;
	}
}

export class Sorcerer extends Horror {
	readonly name: string;
	#evil: boolean;

	constructor(name: string, evil: boolean) {
		super();
		this.name = name;
		this.#evil = evil;
	}

	isEvil(): boolean {
		return this.#evil;
	}

	getPowerFrom(previouslyConsumed: Consumed): number {
		return previouslyConsumed.evil === this.#evil
			? previouslyConsumed.power * 2
			: previouslyConsumed.power;
	}
}
