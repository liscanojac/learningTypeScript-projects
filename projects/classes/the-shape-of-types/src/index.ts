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

	abstract isEvil(): boolean;
	abstract getPowerFrom(previouslyConsumed: Consumed): number;

	getPower(): number {
		return this.#power;
	}

	doBattle(opponent: Horror) {
		if (this.getPower > opponent.getPower) {
			this.#consumes(opponent);
		}
	}

	#consumes(opponent: Horror) {
		this.#consumed.push({
			name: opponent.name,
			power: opponent.getPower(),
			evil: opponent.isEvil(),
		});
		this.#power += opponent.getPower();
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
