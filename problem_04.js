function topRatedRestaurant(restaurants) {

    if (!Array.isArray(restaurants) || restaurants.length === 0 ) {
        return "Invalid";
    }

    let highestRate = -Infinity;
    let name = "";
     for (const i in restaurants) {
        if (restaurants[i].rating > highestRate) {
            highestRate = restaurants[i].rating;
            name = restaurants[i].name;
        }
     }

     return name.toUpperCase();
     
}