const hideAll = document.querySelector(".hide-all")
const ul = document.querySelector("ul")
const mapButton = document.querySelector(".discount")
const sumAllButton = document.querySelector(".sum-all")
const filterButton = document.querySelector(".vegan")
let myLi = ""

const format = (value) => {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}


const all = array => {

    myLi = ""
    array.forEach(product => {

        myLi += `<li>
<img src="${product.src}">
<p>${product.name}</p>
<p class ="item-price">${format(product.price)}</p>
</li>`
    });
ul.innerHTML = myLi
}



const discount = () => {
const discount = menuOptions.map(product => ({
    ...product,
    price: product.price - (product.price * 0.10)
})) 
all(discount)
}


const sumAll = () => {
    myLi = ""
    const sum = menuOptions.reduce((acc, product) => acc + product.price, 0)

    myLi += `<li>
    <p> O valor total da compra dará ${format(sum)}</p>
    </li>`

    ul.innerHTML = myLi
}


const filterVegan = () => {
  const vegan = menuOptions.filter(product => product.vegan)
all(vegan)

}



hideAll.addEventListener("click", () => all(menuOptions))
mapButton.addEventListener("click", discount)
sumAllButton.addEventListener("click", sumAll)
filterButton.addEventListener("click", filterVegan)