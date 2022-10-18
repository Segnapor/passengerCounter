let counter = document.getElementById('count-el');
let count = 0;
let btn = document.querySelector('.btn');
let save = document.querySelector('.save');
let message =  document.querySelector('.message');
btn.addEventListener('click', ()=>{
    count++;
    if(count > 20){
        return count = -1;    
    }
    counter.innerHTML=count;
    console.log(count);
})

save.addEventListener('click', ()=>{
    message.textContent += `${count} -`;
    count = 0;
    counter.textContent = 0;

})
/*function increment (){
count = count + 1;
if(count > 20){
    return count = -1;    
}
counter.innerHTML=count;
console.log(count);} */