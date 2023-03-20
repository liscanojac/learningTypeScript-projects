// Write your Parrot class here! ✨
// You'll need to export it so the tests can run it.
export interface PuppyInTheWindow {
	readonly colors: Array<string>;
	readonly furriness: number;
	readonly owner?: string;
}

export class Puppy implements PuppyInTheWindow {
	readonly colors: Array<string>;
	readonly furriness: number;
	owner: string | undefined;

	constructor(colors: Array<string>, furriness: number) {
		this.colors = colors;
		this.furriness = furriness;
	}

	adopt(newOwner: string) {
		this.owner = newOwner;
	}
}
