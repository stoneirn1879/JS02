/* 4.	Using the variables you created above and Boolean operators, create variables for the following scenarios:
a.	shouldByIcecream – this should be true if it is hot outside and there is money in your pocket
b.	willGoSwimming – this should be true if it is hot outside and it is not a weekday
c.	isAGoodDay – this should be true if it is hot outside, there is money in your pocket, and it is not a weekday
d.	willBuyMilk – this should be true if it is hot outside, and thirstLevel is greater than or equal to 3, 
and moneyInWallet is greater than or equal to 2 times the cost of milk.

*/

var isHotOutside = true;
var isWeekday = false; 
var hasMoneyInPocket = true;

var costOfMilk = 3.97;
var moneyInWallet = 5.10;
var thirstLevel = 6;

var shouldByIcecream = isHotOutside && hasMoneyInPocket;
var willGoSwimming = isHotOutside && !isWeekday;
var isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
var willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= 2 * costOfMilk;

console.log("It's pretty warm out today, will I buy Ice cream? " + shouldByIcecream);
console.log("It's pretty warm out today, will I go swimming? " + willGoSwimming);
console.log("Is it a good day ? " + isAGoodDay);
console.log("Will I buy milk? " + willBuyMilk);