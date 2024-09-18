
const marks = [85, 97, 44, 37, 76, 60];
const total = marks.reduce((acc, mark) => acc + mark, 0);
const average = total / marks.length;
console.log('Average Marks:', average);


const prices = [250, 645, 300, 900, 50];
const discountedPrices = prices.map(price => price * 0.9);
console.log('Discounted Prices:', discountedPrices);


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift(); 
const indexOfUber = companies.indexOf("Uber");
if (indexOfUber !== -1) {
  companies.splice(indexOfUber, 1, "Ola"); 
companies.push("Amazon"); 
console.log('Updated Companies:', companies);}
