const {test , expect} = require ('@playwright/test')
const {hello, helloworld} = require ('./Demo/Hello')


console.log (hello());
console.log (helloworld());