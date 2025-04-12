const btns = document.querySelectorAll("button"),
tabs = document.querySelectorAll("section div")

const hide = ()=>{
    btns.forEach((item,index)=>{
        tabs[index].classList.add("none")
    })
}

btns.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        hide()
        tabs[index].classList.remove("none")
    })
})