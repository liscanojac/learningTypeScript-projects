// Write your groupLandmarks function here! ✨
// You'll need to export it so the tests can run it.

interface Restaurant {
	name: string;
	city: string;
}

interface RestaurantsGrouped {
	[i: string]: Array<string>;
}
export function groupRestaurants(
	restaurants: Array<Restaurant>
): RestaurantsGrouped {
	const restaurantsGrouped: RestaurantsGrouped = {};

	for (let i = 0; i < restaurants.length; i++) {
		if (!restaurantsGrouped.hasOwnProperty(restaurants[i].city)) {
			restaurantsGrouped[restaurants[i].city] = [restaurants[i].name];
			continue;
		}
		restaurantsGrouped[restaurants[i].city].push(restaurants[i].name);
	}
	return restaurantsGrouped;
}
