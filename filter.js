import { ages, companies } from './data.js';

// Get 21 and older

// Using for loop
const canDrinkForLoop = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21)
        canDrinkForLoop.push(ages[i]);
}
console.log('Above 21 years of age');
canDrinkForLoop.forEach(age => console.log(age));

// Using filter
const canDrinkFilter = ages.filter(function (age) {
    if (age >= 21)
        return true;
});
console.log('Above 21 years of age');
canDrinkFilter.forEach(age => console.log(age));

// Using filter with arrow function
const canDrinkFilterArrow = ages.filter(age => age >= 21);
console.log('Above 21 years of age');
canDrinkFilterArrow.forEach(age => console.log(age));

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Filter retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log('Retail companies');
retailCompanies.forEach(company => console.log(company));

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Get 80s companies
const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1990);
console.log('80s companies');
eightiesCompanies.forEach(company => console.log(company));

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Get companies that lasted 10 years or more
const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
console.log('Lasted 10 years or more');
lastedTenYears.forEach(company => console.log(company));