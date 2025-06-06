const body = document.body
setTimeout(()=> {
        body.classList.add('opacityess')
        body.classList.remove('hidden')
},1000)

const rusiaa = document.getElementById('rusiaa')
const kanada = document.getElementById('kanada')
const amerika = document.getElementById('amerika')
const china = document.getElementById('china')
const india = document.getElementById('india')
const japan = document.getElementById('japan')
const indonesia = document.getElementById('indonesia')

rusiaa.addEventListener('click',()=>{
    window.location.href = '/html/payment.html'
})
kanada.addEventListener('click',()=>{
    window.location.href = '/html/payment.html'
})
amerika.addEventListener('click',()=>{
    window.location.href = '/html/payment.html'
})
india.addEventListener('click',()=>{
    window.location.href = '/html/payment.html'
})
japan.addEventListener('click',()=>{
    window.location.href = '/html/country/japan.html'
})
indonesia.addEventListener('click',()=>{
    window.location.href = '/html/country/indo.html'
})

