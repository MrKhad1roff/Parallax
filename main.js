const birds = document.querySelector('.header__birds')
const wolf = document.querySelector('.header__wolf')

const wolf2 = document.querySelector('.header__wolf2')


window.addEventListener('scroll', () => {

    let speed = birds.getAttribute("data-speed")
    birds.style.transform = `translate(${this.scrollY * speed}px)`
    let speedWolf = wolf.getAttribute("data-speed")
    wolf.style.transform = `translateX(${this.scrollY * speedWolf}px)`
    let speedWolf2 = wolf2.getAttribute("data-speed")
    wolf2.style.transform = `translateX(${this.scrollY * speedWolf2}px)`
  
})