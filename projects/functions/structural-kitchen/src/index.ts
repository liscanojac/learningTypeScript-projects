// export function runCommands() {
// 	// Declare your variables and runtime logic here! ✨
// }

type KitchenState = {
	dirt: number;
	stock: StockIngredients;
};

type StockIngredients = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

type RecipeReturnSuccess = {
	succeeded: true;
	newStock: StockIngredients;
};

type RecipeReturnFailure = {
	succeeded: false;
};

type RecipeReturn = RecipeReturnSuccess | RecipeReturnFailure;

type KitchenCreated = {
	announce: AnnounceFunction;
	clean: CleanFunction;
	purchase: PurchaseFunction;
	prepare: PrepareFunction;
};

type CleanerFunction = (dirt: number, time?: number) => number;
type SupplierFunction = (expense: number) => StockIngredients;
type AnnounceFunction = () => string;
type CleanFunction = (time?: number) => void;
type PurchaseFunction = (expense: number) => boolean;
type RecipeFunction = (ingredients: StockIngredients) => RecipeReturn;
type PrepareFunction = (recipe: RecipeFunction) => boolean;

export function createKitchen(
	budget: number,
	cleaner: CleanerFunction,
	supplier: SupplierFunction
): KitchenCreated {
	const state: KitchenState = {
		dirt: 0,
		stock: {
			breads: 0,
			fruits: 0,
			sauces: 0,
			vegetables: 0,
		},
	};

	return {
		announce: () => {
			let annoucement = `I have ${state.dirt} much dirt, ${budget} budget, ${state.stock.breads} bread(s), ${state.stock.fruits} fruit(s), ${state.stock.sauces} sauce(s), and ${state.stock.vegetables} vegetable(s).`;

			return annoucement;
		},
		clean: (time) => {
			return (state.dirt = cleaner(state.dirt, time));
		},
		purchase: (expense) => {
			if (budget < expense) {
				return false;
			}

			const supply = supplier(expense);

			state.stock.breads = state.stock.breads + supply.breads;
			state.stock.fruits = state.stock.fruits + supply.fruits;
			state.stock.sauces = state.stock.sauces + supply.sauces;
			state.stock.vegetables = state.stock.vegetables + supply.vegetables;

			budget = budget - expense;

			return true;
		},
		prepare: (recipe) => {
			if (state.dirt < 100) {
				state.dirt = state.dirt + 1;

				let recipeResult = recipe(state.stock);

				if (recipeResult.succeeded) {
					state.stock = recipeResult.newStock;
					return true;
				}
			}
			return false;
		},
	};
}
