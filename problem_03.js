function calculateAiCost(tokensUsed) {

    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return "0";
    } else {
        let extraToken = tokensUsed - 500;
        extraToken = Math.floor(extraToken /100);
        let payableAmount = extraToken * 5;

        return payableAmount;
    }
}