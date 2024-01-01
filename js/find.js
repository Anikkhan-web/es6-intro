const products = [
    {id:1,name:'laptop',price:45000},
    {id:2,name:'mobile',price:95000},
    {id:3,name:'tablet',price:15000},
    {id:4,name:'mac',price:145000},
]
const cheap = products.find(product => product.price<40000);
console.log(cheap);