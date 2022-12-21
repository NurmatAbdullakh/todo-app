
const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")
const count = document.querySelector(".count")
let acum = 0

increment.addEventListener("click", () => {
    ++acum
    count.innerHTML = acum
})
decrement.addEventListener("click", () => {
    --acum
    count.innerHTML = acum
})