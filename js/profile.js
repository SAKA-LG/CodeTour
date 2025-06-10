const profile = document.querySelector('.profile')
document.getElementById("editProfileBtn").addEventListener("click", () => {
profile.classList.add('blur-lg')
document.getElementById("editModal").classList.remove("hidden")
})

document.getElementById("cancelBtn").addEventListener("click", () => {
profile.classList.remove('blur-lg')
document.getElementById("editModal").classList.add("hidden")
})

document.getElementById("saveBtn").addEventListener("click", () => {
const newUsername = document.getElementById("editUsername").value;
profile.classList.remove('blur-lg')
let UserName = localStorage.setItem('name',newUsername)
document.getElementById("editModal").classList.add("hidden")
window.location.reload()
})

document.getElementById("mobile-menu-btn").addEventListener("click", () => {
document.getElementById("mobile-menu").classList.toggle("hidden")
})



document.getElementById('infoEdit').addEventListener('click',()=>{
    const infoTab = document.querySelector('#infoTab')
    infoTab.classList.remove('hidden')
    infoTab.classList.add('opacity')
})

document.getElementById('cancel').addEventListener('click',()=>{
    document.getElementById('infoTab').classList.add('hidden')
    document.getElementById('infoTab').classList.remove('opacity')
})

const save = document.querySelector('#save')
document.getElementById('save').addEventListener('click',()=>{
    const profiles = document.querySelector('.profiles')
    const located = document.getElementById('located').value
    const univeristy = document.getElementById('univercity').value
    document.getElementById('infoTab').classList.add('hidden')
    document.getElementById('infoTab').classList.remove('opacity')

    let location = localStorage.setItem('locate',located)
    let studys = localStorage.setItem('study',univeristy)
    window.location.reload()
})

const locationed = document.getElementById('location')
const studyed = document.getElementById('studys')
const nameUserIndex = document.querySelector('#nameUserIndex')
let getLocated = localStorage.getItem('locate')
let schooll = localStorage.getItem('study')
let getName = localStorage.getItem('name')
nameUserIndex.textContent = getName
locationed.textContent = getLocated
studyed.textContent = schooll

const friends = document.querySelector('#friend')
let friendStorage = localStorage.getItem('friend')
friends.textContent = `@ ${friendStorage}`
const buttonProfile = document.getElementById('button-View-Profile')
buttonProfile.classList.add('cursor-pointer')

buttonProfile.addEventListener('click',()=>{
    window.location.href = '/profile.html'
    
})