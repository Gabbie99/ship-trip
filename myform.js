// var sub = document.querySelector('button');

// sub.addEventListener('click', function submit (){
//     var age = prompt('How old are you please')
//     if(age >= 18){alert("Welcome to a world of fun and excitement, your registration is now complete")}
//     else {alert("Sorry to inform you that you are not eligible for this trip. Please try again next time.")};
// })


// var target = document.querySelector('body')
// var pTag = document.createElement("button")

// pTag.textContent = "I love Jesus, he's my friend"
// target.append('My family')
// target.appendChild(pTag)

//------------------------------------------------------------------
// PROJECT
let color0 = "#f505c5"
let color1 = "#c8d4f4"
let color2 = "#f59505"
let color3 = "#819e2b"
let color4 = "#05f535"
let color5 = "#7905f5"
let color6 = "#f5a818"
let color7 = "#18f587"
let color8 = "#18c5f5"
let color9 = "#1866f5"
let color10 = "#e600ff"

let colors = [color0, color1, color2, color3, color4, color5, color6]
//------------------------------------------------------------------
document.querySelectorAll("input")[0].addEventListener("click" ,
function colorChange0() {
    cool0 = document.querySelectorAll("div")[2].style.background = colors[Math.floor(Math.random() * colors.length)]
})
// // //----------------------------------------------------------------
document.querySelectorAll("input")[1].addEventListener("click" ,
function colorChange1() {
     cool1 = document.querySelectorAll("div")[2].style.background = colors[Math.floor(Math.random() * colors.length)]
})
// //------------------------------------------------------------------
document.querySelectorAll("input")[2].addEventListener("click" ,
function colorChange2() {
    cool2 = document.querySelectorAll("div")[2].style.background = colors[Math.floor(Math.random() * colors.length)]
})
//------------------------------------------------------------------
document.querySelectorAll("input")[3].addEventListener("click" ,
function colorChange3() {
    cool3 = document.querySelectorAll("div")[2].style.background = colors[Math.floor(Math.random() * colors.length)]
})
//------------------------------------------------------------------
document.querySelectorAll("input")[4].addEventListener("click" ,
function colorChange4() {
    cool4 = document.querySelectorAll("div")[2].style.background = colors[Math.floor(Math.random() * colors.length)]
})
//------------------------------------------------------------------
document.querySelectorAll("input")[5].addEventListener("click" ,
function colorChange5() {
    cool5 = document.querySelectorAll("div")[2].style.background = colors[Math.floor(Math.random() * colors.length)]
})
//------------------------------------------------------------------
document.querySelectorAll("input")[6].addEventListener("click" ,
function colorChange6() {
    cool6 = document.querySelectorAll("div")[2].style.background = colors[Math.floor(Math.random() * colors.length)]
})

