const speaker = document.querySelector("#speaker")
const audio = new Audio("/src/sound/synthesized_audio.wav")
speaker.addEventListener("click", () => {
  audio.play();
})
const user = document.getElementById("user")
const bot = document.getElementById("bot")

const button = document.getElementById("button");
const input = document.getElementById("input").value;

button.addEventListener("click", () => {
  const input = document.getElementById("input")
  const userCreate = document.createElement("h2")
  const botCreate = document.createElement("h2")

  document.getElementById("haiSay").style.display = "none"
  user.textContent = input.value
  user.append(userCreate)
  user.classList.add("break-words", "mr-32")
  bot.classList.add("break-all", "w-80", "ml-32")
  let name = localStorage.getItem("name")
  if (input.value.includes("hai")) {
    setTimeout(() => {
      bot.innerHTML = "";
      const loadingImg = document.createElement("img")
      loadingImg.src = "/src/asset/loading.gif";
      loadingImg.style.width = "50px"
      loadingImg.style.height = "50px"
      bot.appendChild(loadingImg)
    }, 0)
    setTimeout(() => {
      bot.innerHTML = ""
      bot.textContent = `🟣 Haii ${name} 👋 senang ada kamu disini ada yg bisa di bantu?`;
      bot.classList.add('opacity')
      bot.append(botCreate)
    }, 2000)
  }
  input.value = ""
})


