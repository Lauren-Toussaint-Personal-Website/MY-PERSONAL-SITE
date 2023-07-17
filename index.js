const dinner = {cheeseburger: 12,
steak: 20,
soup: 8,
macAndCheese: 14,
soupAndSalad: 16,
};
console.log(Object.keys(dinner));
console.log(Object.values(dinner));
//for (const property in dinner);
let total=0;
for (const property in dinner){
    total += dinner[property];}
    console.log(total);