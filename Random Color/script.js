const span = document.querySelector("span"),
body = document.body

body.style.backgroundColor = span.innerText

const hex = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]

const generateRandomColor = ()=>{
    let col = "#"
    for(let i=0;i<6;i++){
        let index = Math.floor(Math.random()*(hex.length))
        col += hex[index]
    }
    return col
}


document.querySelector("button").addEventListener("click",()=>{
    let random = generateRandomColor()
    span.innerText = random
    body.style.backgroundColor = random
})


