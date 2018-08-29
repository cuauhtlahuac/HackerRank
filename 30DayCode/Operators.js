function solve(meal_cost, tip_percent, tax_percent){
    let tip = meal_cost * (tip_percent / 100);
    let tax = meal_cost * (tax_percent / 100);
    let totalCost = tip + tax + meal_cost;
    console.log(totalCost)
    return "The total meal cost is " + Math.round(totalCost) + " dollars."
}

console.log(solve(15.00, 20,8))