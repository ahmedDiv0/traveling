const nav = document.querySelector('.nav')
window.addEventListener('scroll' , fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 300){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}


const imgs = document.getElementById('imgs')
const left = document.getElementById('left')
const right = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')

let zz = 0
let interval = setInterval(run, 4000)

function run() {
    zz++
    changeImage()
}

function changeImage() {
    if(zz > img.length - 1) {
        zz = 0
    } else if(zz < 0) {
        zz = img.length - 1
    }

    imgs.style.transform = `translateX(${-zz * 1950}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 4000)
}

right.addEventListener('click',() =>{
    zz++
    changeImage()
    resetInterval()
})

left.addEventListener('click', () =>{
    zz--
    changeImage()
    resetInterval()
})




const writ = document.getElementById('writing')

const writing = 'I LOVE TRAVLING'

let yy = 1

let speed = 200

writeText()
function writeText(){
    writ.innerText = writing.slice(0,yy)
    yy++
    if(yy > writing.length){
        yy = 1
    }
    setTimeout(writeText , speed)
}

const movee = document.getElementById('moving')
const moving = 'some photos about the places'
let aa = 1
let speeds = 100
writeTexte()
function writeTexte(){
    movee.innerText = moving.slice(0,aa)
    aa++
    if(aa > moving.length){
        aa = 1
    }
    setTimeout(writeTexte , speeds)
}




























const panals = document.querySelectorAll('.panal')

panals.forEach(panal => {
    panal.addEventListener('click', () =>{
        removeActiveClasses()
        panal.classList.add('active')
    })
})

function removeActiveClasses(){
    panals.forEach(panal => {
        panal.classList.remove('active')
    })
}


const togglees = document.querySelectorAll('.box-toggle')
togglees.forEach(toggle =>{
    toggle.addEventListener('click' , () => {
       toggle.parentNode.classList.toggle('active')
    })
})












const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll' , checkBoxes)

checkBoxes()

function checkBoxes(){
    const tiggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < tiggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
} 

const moves = document.querySelectorAll('.move')
window.addEventListener('scroll' , checkBoxess)

checkBoxess()

function checkBoxess(){
    const tiggerBottom = window.innerHeight / 5 * 4

    moves.forEach(move => {
        const boxTop = move.getBoundingClientRect().top

        if(boxTop < tiggerBottom){
            move.classList.add('show')
        }else{
            move.classList.remove('show')
        }
    })
} 
