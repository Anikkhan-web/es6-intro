document.getElementById('apply-bg').addEventListener('click',function(){

    // console.log('apply');
    const friends= document.getElementsByClassName('friend')
    // console.log(friends);
    for(const friend of friends){
        // console.log(friend);
        friend.style.backgroundColor = "lightblue"
    }
})
document.getElementById('apply-bg-third').addEventListener('click',function(){

    const third= document.getElementById('third-friend')
        third.style.textAlign = "center"
   
})

document.getElementById('add-friend').addEventListener('click',function(){

    const friendsContainers= document.getElementById('friends')
        const friend= document.createElement('div')
        friend.classList.add('friend')
        friend.innerHTML =`
        
        <h3 class="friend-name">New Friend</h3>
        <p>something new added</p>
        
        
        `
   friendsContainers.appendChild(friend)
})


const person = {
    name:"anik",
    age:30
}
console.log(person.name);

const numbers = [1,2,3,4]
let sum = 0
for (let i=0;i<numbers.length; i++){
   const  number= numbers[i]
   sum = sum + number
    console.log(number);
    console.log(sum);
}
