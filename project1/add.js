df = document.querySelector('.df')

op = document.querySelectorAll('.op')
console.log(op)
gsap.from(op, {
    x : -20,
    opacity : 0,
    stagger:0.3,
})

main = document.querySelector('.main')
cursor = document.querySelector('.cursor')


document.body.addEventListener('mousemove', (e)=>{
    gsap.to(cursor,{
        x:e.x,
        y: e.y,
        duration :0.7,
        ease: "back"
    })
})


let dict1 = {}; // Initialize dictionary
let expdate = "";

document.getElementById("inputBox").addEventListener("change", function(event) {
    dict1["inputBox"] = event.target.value; // Store value in dictionary
    document.querySelector(".fi1").innerHTML += dict1["inputBox"] + ", "; // Update HTML
});

document.getElementById("ib").addEventListener("change", function(event) {
    dict1["ib"] = event.target.value;
    document.getElementById("fif1").innerHTML += dict1["ib"] + ", "; // Update expiry section
    expdate = new Date(event.target.value); // Convert input to Date object
    expiryNotification(); // Call function to check expiry
});

function expiryNotification() {
    let currentDate = new Date(); // Get current date
    if (expdate instanceof Date && !isNaN(expdate)) { // Check if expdate is a valid date
        if (currentDate >= expdate) {
            alert(" Warning: The food item has expired!");
        } else {
            console.log("✅ Food is still good!");
        }
    } else {
        console.log(" Invalid date entered!");
    }
}


sp = document.querySelectorAll('.spppp')
gsap.from(sp,{
    x:-20,
    opacity:0,
    stagger: 0.3,
})
jk =document.querySelector('#jk')
gsap.from(jk,{
    y:-100,
    duration:1
})


l1 = document.querySelector('#l1')

l1.addEventListener('click',()=>{
    location.href = 'index.htm'

})
l2 = document.querySelector('#l2')

l2.addEventListener('click',()=>{
    location.href = 'gapi.htm'
})
l3 = document.querySelector('#l3')

l3.addEventListener('click',()=>{
    location.href = 'au.htm'
})
l4 = document.querySelector('#l4')

l4.addEventListener('click',()=>{
    location.href = 'donate.htm'
})