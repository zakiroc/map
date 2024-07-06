let names = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50]; 

// let newdrr = names.filter ((item)=>{
//     return item.includes('a');

// })
// console.log(names);
// console.log(newdrr);

let box  = document.querySelector ('.box')

names.forEach((item)=>{
    let text = document.createElement('h1')
    if(item > 50){
        text.innerHTML = item 
        text.classList.add('blue')

    }else{
        text.innerHTML = item
        text.classList.add ('yellow')
        }
        box.appendChild(text)

    
})