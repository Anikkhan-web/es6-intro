const products = [
    {id:1,name:'laptop',price:45000},
    {id:2,name:'mobile',price:95000},
    {id:3,name:'tablet',price:15000},
    {id:4,name:'mac',price:145000},
]
const numbers = [ 12,5,34,49,94,56,98]
const bigNums = numbers.filter(number=>number>20)
// console.log(bigNums);
const expensive = products.filter(product=> product.price>100000)
console.log(expensive);