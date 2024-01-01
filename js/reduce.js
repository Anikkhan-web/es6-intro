const numbers= [1,2,3,4,5]
const total  = numbers.reduce((privious,current)=>{
    return privious+current
},0)