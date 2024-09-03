let timeLine =gsap.timeline()
timeLine.from("#navbar h3",{
    y:-50,
    duration:1,
    delay:0.3,
    opacity:0, //it will give appering effect
    stagger:0.5 //means shop elements one by one
})

timeLine.from("#section-2 h1",{
    x:-250,
    duration:1,
    delay:0.3,
    opacity:0,
    stagger:0.5
})

timeLine.from("img",{
    x:-250,
    duration:1,
    delay:0.3,
    opacity:0,
    rotate:30,
    stagger:0.5
})  