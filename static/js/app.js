let menu_bar = document.getElementById('navbar-btn');
let navbar_items = document.getElementsByClassName('navbar-items')


menu_bar.addEventListener('click', ()=> {
    //console.log('Menu clicked!')

    for (let i=0; i<navbar_items.length; i++){
        navbar_items[i].classList.toggle('d-md-none')

    }
    
})


let user_info = [
    {
        id: 1,
        first_name: "Nathan",
        last_name: "Timothy",
        is_admin: true,
        age : 20,
        is_authenticated: true
    },

    {
        id: 2,
        first_name: "Owens",
        last_name: "Smit",
        is_admin: false,
        age : 24,
        is_authenticated: true
    },

    {
        id: 3,
        first_name: "John",
        last_name: "mitch",
        is_admin: false,
        age : 30,
        is_authenticated: false
    }
]

let article_data = [
    {
        id:1,
        title: "This is title 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur molestiae natus dolorem architecto, fugit, inventore quia iure fugiat esse, voluptas laudantium error eaque? Reiciendis alias omnis ipsa pariatur explicabo.",
        image_url: "static/img/a1.jpg",
        ulr: "/article/1",
        date: new Date().toDateString()
    },

    {
        id:2,
        title: "This is title 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur molestiae natus dolorem architecto, fugit, inventore quia iure fugiat esse, voluptas laudantium error eaque? Reiciendis alias omnis ipsa pariatur explicabo.",
        image_url: "static/img/a2.jpg",
        ulr: "/article/2",
        date: new Date().toDateString()
    },

    {
        id:3,
        title: "This is title 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur molestiae natus dolorem architecto, fugit, inventore quia iure fugiat esse, voluptas laudantium error eaque? Reiciendis alias omnis ipsa pariatur explicabo.",
        image_url: "static/img/a3.jpg",
        ulr: "/article/3",
        date: new Date().toDateString()
    },

    {
        id:3,
        title: "This is title 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur molestiae natus dolorem architecto, fugit, inventore quia iure fugiat esse, voluptas laudantium error eaque? Reiciendis alias omnis ipsa pariatur explicabo.",
        image_url: "static/img/a3.jpg",
        ulr: "/article/3",
        date: new Date().toDateString()
    },

    {
        id:3,
        title: "This is title 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur molestiae natus dolorem architecto, fugit, inventore quia iure fugiat esse, voluptas laudantium error eaque? Reiciendis alias omnis ipsa pariatur explicabo.",
        image_url: "static/img/a3.jpg",
        ulr: "/article/3",
        date: new Date().toDateString()
    },

    {
        id:3,
        title: "This is title 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur molestiae natus dolorem architecto, fugit, inventore quia iure fugiat esse, voluptas laudantium error eaque? Reiciendis alias omnis ipsa pariatur explicabo.",
        image_url: "static/img/a3.jpg",
        ulr: "/article/3",
        date: new Date().toDateString()
    },
    {
        id:3,
        title: "This is title 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur molestiae natus dolorem architecto, fugit, inventore quia iure fugiat esse, voluptas laudantium error eaque? Reiciendis alias omnis ipsa pariatur explicabo.",
        image_url: "static/img/a3.jpg",
        ulr: "/article/3",
        date: new Date().toDateString()
    }
]


window.localStorage.setItem('data', JSON.stringify(article_data))


let data = JSON.parse(window.localStorage.getItem('data'))

console.log(data)

let articleEl = document.getElementById('article-list')

for (let i=0; i<data.length; i++){
    
    articleEl.insertAdjacentHTML("afterbegin", `
      <div class="col-md-4">
            <div class="card">
                <div class="card-img">
                    <img src=${data[i].image_url} alt="">
                </div>

                <div class="card-content">
                    <a href=${data[i].ulr} class="btn card-btn">
                        View Article
                    </a>

                    

                    <h2 class="card-title">
                        ${data[i].title}
                    </h2>

                    <div class="card-date">
                        ${data[i].date}
                    </div>
                </div>
            </div>
        </div>  
    `)
}


/*
let fruit = ['mango', 'orange', 'banana', 'mango', 'orange', 'banana', 'mango', 'orange', 'banana', 'mango', 'orange', 'banana']

console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])


console.log(fruit.length)

for (let i=0; i<fruit.length; i++){
    console.log(i, fruit[i])
}*/