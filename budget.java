public class Main {
    let income = 1400;
    let rent = 400;
    let groceries = 250;
    let utilities = 100;
    
    let totalExpenses = (rent + groceries + utilities);
    let remainingMoney = (income - remainingMoney);

    let rentPercent = (rent/income) * 100;
    let groceriesPercent = (groceries/ income) * 100;

    console.log("The total income was: " + income.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    console.log("The rent total was: " + rent.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    console.log("The grocery total was: " + groceries.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    console.log("The total expenses were: " + totalExpenses.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    console.log("The remaining money is: " + remainingMoney.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    console.log("Percentage spent on rent: " + rentPercentage + "%");
    console.log("Percentage spent on groceries: " + groceriesPercentage + "%");

}
