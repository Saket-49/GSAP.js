df = document.querySelector('.df')

op = document.querySelectorAll('.op')
console.log(op)
gsap.from(op, {
    x : 20,
    opacity : 0,
    stagger:0.3,
})

