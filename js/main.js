const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

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
        window.location.href = '/html/langauge.html'
    })

    const send = document.querySelector('.sends')
    send.addEventListener('click',()=>{
        const inputs = document.querySelector('.inputss').value
        localStorage.setItem('friend',inputs)
        console.log(localStorage.getItem('friend'))
        const titiles = document.querySelector('#titles')
        setTimeout(()=>{
            titiles.textContent = 'Succses'
        },200)
        setTimeout(()=>{
            titiles.textContent = 'Invite a Friend'
        },600)

        if(inputs == ''){
            alert('please type your corect email friend')
        }
    })