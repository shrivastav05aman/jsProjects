const i = document.querySelectorAll("i"),
prevBtn = i[0],
nextBtn = i[1],
posts = document.querySelectorAll(".posts"),
post = document.querySelectorAll(".post"),
slider = document.querySelector(".slider")


let index=1

const updatePosts = ()=>{
    if(index > post.length)
        index = 1
    else if(index < 1)
        index = post.length
}

nextBtn.addEventListener("click",()=>{
    index++
    updatePosts()
    post.forEach((value)=>{
        value.style.transform = `translateX(-${(index-1)*547}px)`
    })
    slider.style.transform = `translateX(${(index-1)*110}px)`
})

prevBtn.addEventListener("click",()=>{
    index--
    updatePosts()
    post.forEach((value)=>{
        value.style.transform = `translateX(-${(index-1)*547}px)`
    })
    slider.style.transform = `translateX(${(index-1)*110}px)`
})