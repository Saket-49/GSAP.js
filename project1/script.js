const cursor = document.querySelector('.cursorAnim');
const bgg = document.querySelector('.bgg2');
menu = document.querySelector('.menu')


window.addEventListener('mousemove', (e) => {
    mousex = e.pageX;
    mousey = e.pageY; 

    gsap.to(cursor, {
        x: mousex+5,
        y: mousey+5,
        opacity:1,
        duration:0.3
    });
});

window.addEventListener('scroll', () => {
    gsap.to(cursor, {
        opacity: 0,
    });
});

logo = document.querySelector('#icon')
logo.addEventListener('click',()=>{
    location.reload()
})

designText = document.querySelector('.spcnt')
allSpanDesign = document.querySelectorAll('.sp')

gsap.to(allSpanDesign,{
    y: -120,
    opacity: 1,
    stagger:0.3
})

window.addEventListener('scroll', () => {
    allSpanDesign.forEach((span) => {
        if (window.scrollY >= 120) {
            menu.style.transform= 'scale(0.85)'
            span.style.color= '#22c1a4'
        } else {
             menu.style.transform= 'scale(1)'
             span.style.color = 'black'
        }
    });
});


// v = document.querySelectorAll('.v')
// mo = document.querySelectorAll('.mo')

// v.forEach((elem)=>{
//     elem.addEventListener('mouseenter',()=>{
//         mo.forEach((mol)=>{
//             gsap.to(mol,{
//                 y:-20,
//                 duration:1,
//                 stagger:1
//             })
//         })
        
        
//     })
// })
// v.forEach((elem)=>{
//     elem.addEventListener('mouseleave',()=>{
//         mo.forEach((mol)=>{
//             gsap.to(mol,{
//                 y:0,
//                 duration:1,
//                 stagger: -1
//             })
//         })
//     })
// })
const iki = document.querySelector('.iki')
jjf = document.querySelectorAll('.jjf')
jjf.forEach((elem)=>{
    gsap.to(elem,{
        y:-10,
        duration:0.2,
        stagger:1,
        opacity:1,
        scrollTrigger:{
            trigger: elem,
            start: "top 80%", 
            end: "bottom 20%", 
            scrub: true,
            scroller: 'body'
        }
    })
})
const btn = document.querySelector('.btn');
const gola = document.querySelector('.gola')
btn.addEventListener('mouseenter', () => {
    gsap.to(gola, {
        height : 140,
        width: 200,
        duration: 0.7,
        opacity:1
    });
    gsap.to(btn,{
        transform: 'scale(1.05)',
        duration: 0.3
    })
});

btn.addEventListener('mouseleave', () => {
    gsap.to(gola, {
        height : 14,
        width:14,
        duration:0.7,
        opacity:0
    });
    gsap.to(btn,{
        transform: 'scale(1)',
        duration: 0.3
    })
});
const btn2 = document.querySelector('.btn2');
const gola2 = document.querySelector('.gola2')
btn2.addEventListener('mouseenter', () => {
    gsap.to(gola2, {
        height : 140,
        width: 200,
        duration: 0.7,
        opacity:1
    });
    gsap.to(btn2,{
        transform: 'scale(1.05)',
        duration: 0.3
    })
});

btn2.addEventListener('mouseleave', () => {
    gsap.to(gola2, {
        height : 14,
        width:14,
        duration:0.7,
        opacity:0
    });
    gsap.to(btn2,{
        transform: 'scale(1)',
        duration: 0.3
    })
});



// featured work logic

const fw = document.querySelector('.fw');
const fwl = fw.innerText.split(''); 

let storage = '';
for (let i = 0; i < fwl.length; i++) {
    const rr = fwl[i] === ' ' ? ' ' : `<span class='wavy-text'>${fwl[i]}</span>`;
    storage += rr;
}


fw.innerHTML = storage;

const wavyText = document.querySelectorAll('.wavy-text');


gsap.to(wavyText, {
    x: 100,      
    opacity: 1,      
    stagger:0.2,
    duration: 1,
    scrollTrigger:{
        scroller: 'body',
        trigger : wavyText,
        scrub:4,
        start: "top 100%", 
        end: "bottom 30%",
    }
});

cnt1 = document.querySelector('.cntt1')
cnt2 = document.querySelector('.cntt2')
cnt3 = document.querySelector('.cntt3')
cnt4 = document.querySelector('.cntt4')
cnt1.addEventListener('mouseenter',()=>{
    cursor.innerText = 'click here'
    gsap.to(cursor,{
        height:20,
        width:200,
        borderRadius:20,
        duration:0.4
    })
    
})
cnt1.addEventListener('mouseleave',()=>{
    cursor.innerText = ''
    gsap.to(cursor,{
        height:12,
        width:12,
        borderRadius: '50%',
        duration:0.4
    })
    
})
cnt2.addEventListener('mouseenter',()=>{
    cursor.innerText = 'click here'
    gsap.to(cursor,{
        height:20,
        width:200,
        borderRadius:20,
        duration:0.4
    })
    
})
cnt2.addEventListener('mouseleave',()=>{
    cursor.innerText = ''
    gsap.to(cursor,{
        height:12,
        width:12,
        borderRadius: '50%',
        duration:0.4
    })
    
})
cnt3.addEventListener('mouseenter',()=>{
    cursor.innerText = 'follow our work'
    cursor.style.color = "#22c1a4"
    gsap.to(cursor,{
        height:20,
        width:200,
        borderRadius:20,
        duration:0.4
    })
    
})
cnt3.addEventListener('mouseleave',()=>{
    cursor.innerText = ''

    gsap.to(cursor,{
        height:12,
        width:12,
        borderRadius: '50%',
        duration:0.4
    })
    
})
cnt4.addEventListener('mouseenter',()=>{
    cursor.innerText = 'follow our work'
    gsap.to(cursor,{
        height:20,
        width:200,
        borderRadius:20,
        duration:0.4
    })
    
})
cnt4.addEventListener('mouseleave',()=>{
    cursor.innerText = ''
    gsap.to(cursor,{
        height:12,
        width:12,
        borderRadius: '50%',
        duration:0.4
    })
    
})

const initialPath = `M 10 80 Q 95 80 2000 80`;
const stringg = document.querySelector("#string");

stringg.addEventListener("mousemove", (event) => {
   
    const rect = stringg.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const path = `M 10 80 Q ${mouseX} ${mouseY} 2000 80`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out",
    });
});

stringg.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 0.3,
        ease: "power3.out",
    });
});


auuu = document.querySelector('.auuu');
auuu.addEventListener('click', () => {
    location.href = "au.htm"; 
});

pis = document.querySelector('#pis')
pis.addEventListener('click', ()=>{
    location.href = "https://www.google.com/"
})
piss = document.querySelector('#piss')
piss.addEventListener('click', ()=>{
    location.href = "https://www.google.com/"
})
pisss = document.querySelector('#pisss')
pisss.addEventListener('click', ()=>{
    location.href = "https://www.google.com/"
})


au = document.querySelector('.auuu')

au.addEventListener('click',()=>{
    location.href = 'au.htm'
})
bnbn = document.querySelector('.bnbn')

bnbn.addEventListener('click',()=>{
    location.href = 'donate.htm'
})

nnne = document.querySelector('.nnne')
nnne.addEventListener('click',()=>{
    location.href = 'new.htm'
})

oll = document.querySelector('.oll')

oll.addEventListener('click',()=>{
    location.href = 'p4.html'
})

cnnn = document.querySelector('.cnnn')

cnnn.addEventListener('click',()=>{
    location.href = 'gapi.htm'
}

)