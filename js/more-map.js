const numbers = [12,435,6575,8687]
const half = numbers.map(x=>x/2)
const thired = numbers.map(x=>x/3)
const fourth = numbers.map(x=>x*4)

// console.log(half);
// console.log(thired);
// console.log(fourth);
const products = [
    {id:1,name:'laptop',price:45000},
    {id:2,name:'mobile',price:95000},
    {id:3,name:'tablet',price:15000},
    {id:4,name:'mac',price:145000},
]
const items = products.map(product=>product.name)
console.log(items);