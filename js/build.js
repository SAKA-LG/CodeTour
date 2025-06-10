const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

const imgProfile = document.querySelector('#img-profile')

imgProfile.addEventListener('click',()=> {
    window.location.href = '/profile.html'
})

