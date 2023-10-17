import { companies, ages } from './data.js';

// For loop

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

// forEach

companies.forEach(function (company) {
    console.log(company.name);
});