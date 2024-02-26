

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let ul = document.querySelector('ul.nav')
trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    ul.classList.toggle('dark')

})