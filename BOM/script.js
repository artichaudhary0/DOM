// location.reload()

// setTimeout(()=>{
//     location.reload()
// },2000)

let box = document.getElementById("product-list")
let response = fetch("https://dummyjson.com/products")

response.then((data)=>data.json()).then((value)=>{
    
    item = value.products
    console.log(item)
    
    item.forEach((element, id) => {
        let itemContainer = document.createElement('div')

        itemContainer.innerHTML = `
        <h1>${element.title}</h1>
        <img src=${element.images} alt="Girl in a jacket" width="500" height="600">
        `
        box.appendChild(itemContainer)
    });
})