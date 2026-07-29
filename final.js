// problem - 01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {

    if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
        return "Invalid";
    }


  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamAGoals < teamBGoals) {
    return "Team B Won";
  } else {
    return "Draw";
  }
}



// problem - 02:  Elevator Weight Safety Checker
function isElevatorSafe(weights) {

    if (!Array.isArray(weights)) {
        return "Invalid";
    }

    let safeWeight = 400;
    let currentWeight = 0;

    for (const i of weights) {
        if (typeof i !== "number") {
            return "Invalid";
        }
        currentWeight += i;
    }

    if (currentWeight <= safeWeight) {
        return true;
    } else {
        return false;
    }
}





// problem - 03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {

    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return 0;
    } else {
        let extraToken = tokensUsed - 500;
        extraToken = Math.floor(extraToken /100);
        let payableAmount = extraToken * 5;

        return payableAmount;
    }
}



// problem - 04: Top Rated Restaurant Finder
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



// problem - 05: API Response Time Monitor
function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length === 0) {
        return "Invalid";
   }

   for (const i of times) {
    if (typeof i !== "number") {
        return "Invalid";
    }
   }
   
 let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }
   
  return total / times.length;
}