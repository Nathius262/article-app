let menu_bar = document.getElementById('navbar-btn');
let navbar_items = document.getElementsByClassName('navbar-items')


menu_bar.addEventListener('click', ()=> {
    //console.log('Menu clicked!')

    for (let i=0; i<navbar_items.length; i++){
        navbar_items[i].classList.toggle('d-md-none')

    }
    
})

/*
let fruit = ['mango', 'orange', 'banana', 'mango', 'orange', 'banana', 'mango', 'orange', 'banana', 'mango', 'orange', 'banana']

console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])


console.log(fruit.length)

for (let i=0; i<fruit.length; i++){
    console.log(i, fruit[i])
}*/