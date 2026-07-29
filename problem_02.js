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
