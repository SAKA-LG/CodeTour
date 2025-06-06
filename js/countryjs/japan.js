const input = document.getElementById("Inputjapan")
const slotjapan = document.getElementById("slot0")
const saves = document.getElementById('saves')
const bgJapan = document.getElementById("backgroundJapan")

saves.addEventListener("click", () => {
  const value = input.value;
  slotjapan.innerHTML = value;
})
saves.addEventListener("click", () => {
  const value = input.value.trim().toLowerCase();
  
  if (value === "transfrom = brightness-50") {
    bgJapan.classList.add("brightness-50", "saturate-50")
    slotjapan.innerHTML = '<span class="text-black text-lg">Hello japan</span>';
  } else {
    slotjapan.innerHTML = value;
  }
})

function resetAll() {
  window.location.reload()
}

function complite() {
  window.location.href = "/html/complite.html"
}