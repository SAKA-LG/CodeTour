const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

const imgProfile = document.querySelector('#img-profile')

imgProfile.addEventListener('click',()=> {
    window.location.href = './profile.html'
})
const nameGet = localStorage.getItem('name')
const nameLocated = document.querySelector('#name')
nameLocated.innerHTML = nameGet
const body = document.body
setTimeout(()=> {
        body.classList.add('opacity')
        body.classList.remove('hidden')
},800)


const buttonProfile = document.getElementById('button-View-Profile')
buttonProfile.addEventListener('click',()=>{
    window.location.href = '/profile.html'
})

    const checknow = document.getElementById('checknow')
    checknow.addEventListener('click',()=>{
        window.location.href = '/html/payment.html'
    })


    document.getElementById('learning').addEventListener('click',()=>{
        window.location.href = '/html/country.html'
    })

    const shopeCart = document.querySelector('#shopCart')
    shopeCart.addEventListener('click',()=>{
        shopeCart.classList.add('')
    })