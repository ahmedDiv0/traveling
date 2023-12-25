 const nums = document.querySelectorAll('.num span')
 const count = document.querySelector('.count')
const final = document.querySelector('.back-the-frist-page')

runFunction()

function runFunction(){
    nums.forEach((num,idx)=>{
        const nextToLast = num.length-1

        num.addEventListener('animationend',(e) =>{
            if(e.animationName === 'goIn' && idx !== nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
            }else if(e.animationName === 'goOut' && num.nextElementSibling){    
                num.nextElementSibling.classList.add('in')
            }else{
                count.classList.add('hide')
                final.classList.add('show')
            }
        })
    })
}


const toggles = document.querySelectorAll('.faq-toggle')
toggles.forEach(toggle =>{
    toggle.addEventListener('click' , () =>{
        toggle.parentNode.classList.toggle('active')
    })
})

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        const z = +counter.innerText

        const increment = target / 500

        if(z < target){
            counter.innerText=`${Math.ceil(z+increment)}`
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = target
        }
    }
    updateCounter() 
})  


