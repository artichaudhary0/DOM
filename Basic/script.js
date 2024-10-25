// let p = document.querySelector('p')
 let h1 = document.querySelector('.css-image')
// p.innerHTML = `<h4>Heloo</h4>`
// console.log(p)

let h2 = document.querySelector("h2")

h2.addEventListener("click",()=>{
    p.style.color = "red"
    location.reload()
})

let a = document.querySelectorAll("a")

for(let item of a)
{
    item.style.color = "teal"
    item.style.textDecoration="none"
}

h1.classList.add("fuck")
h1.classList.remove("fuck")
h1.classList.toggle("fuck")