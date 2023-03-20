// Write your classes here! ✨
// You'll need to export them so the tests can run them.

export abstract class Horror {
	protected abstract readonly name: string;
	protected evil: boolean;
	abstract power: number;

	doBattle(opponent: Horror) {}

	getPower() {}

	protected abstract getPowerFrom(opponent: Horror): number;

	protected abstract isEvil(): boolean;
}

class Demon extends Horror {
	protected name: string = "Demon";
}
