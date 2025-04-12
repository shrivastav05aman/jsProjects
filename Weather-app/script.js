const searchField = document.querySelector(".search")
const btn = document.querySelector("button")
const locationField = document.querySelectorAll(".weather1 h2")
const stateField = document.querySelector(".weather1 p")
const image = document.querySelector(".weather2 img")
const conditionField = document.querySelector(".weather2 img+span")
const countryField = document.querySelector(".weather1 span")
const img = document.querySelector(".weather2 img")
const temperaturesField = document.querySelectorAll(".weather2 p")
const timeField = document.querySelectorAll(".weather3 p")
const form = document.querySelector("form")

let target = "new delhi"

const showTemperature = async(target)=>{
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=c260ca796c6c41c090b172605242908&q=${target}`

        const data = await fetch(url)
        const response = await data.json()
        const {
            location : {name, country, lat,lon},
            current: {
            condition : {icon, text},
            temp_c, temp_f, last_updated
        }
        } = response
        updateDom(name, country, lat, lon, icon, text, temp_c, temp_f, last_updated)
    } catch (error) {
        alert("Unable to access location")
    }    
}

const getFulldayName = (num)=>{
    switch(num){
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}

const updateDom = (state, country, lat, lon, icon, text, temp_c, temp_f, current)=>{
    let exact = current
    exact = exact.split(" ")
    const exactTime = exact[1]
    let exactDate = new Date(exact[0])
    const dd = String(exactDate.getDate()).padStart(2,"0")
    const mm = String(exactDate.getMonth()).padStart(2,"0")
    const yy = exactDate.getFullYear()%100
    exactDate = `${dd}/${mm}/${yy}`
    const exactDay =getFulldayName(new Date(exact[[0]]).getDay())    

    stateField.innerText = state
    countryField.innerText = country
    locationField[0].innerText += ` ${lat}`
    locationField[1].innerText += ` ${lon}`
    image.src = icon
    conditionField.innerText = text
    temperaturesField[0].innerText = temp_c
    temperaturesField[0].innerText += "° C"
    temperaturesField[1].innerText = temp_f
    temperaturesField[1].innerText += "° F"
    timeField[0].innerText = exactDate
    timeField[1].innerText = exactDay
    timeField[2].innerText = exactTime
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    target = searchField.value
    showTemperature(target)
})

showTemperature(target)