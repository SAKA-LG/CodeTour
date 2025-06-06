const textarea = document.getElementById("consoleInput");
const slots = [
  document.getElementById("slot0"),
  document.getElementById("slot1"),
  document.getElementById("slot2")
];

let commands = JSON.parse(localStorage.getItem("exerciseProgress")) || [];

function render() {
  slots.forEach(slot => slot.innerHTML = '');
  commands.forEach((cmd, index) => {
    if (cmd.type === "img" && index < slots.length) {
      const img = document.createElement("img");
      img.src = cmd.value;
      img.className = "w-full h-full object-contain";
      slots[index].appendChild(img);
    }
  });
}

function saveProgress() {
  const value = textarea.value.trim();

  const match = value.match(/^img\s+"(.+)"$/i);
  if (match && commands.length < slots.length) {
    const url = match[1];
    commands.push({ type: "img", value: url });
    render();
  }

  localStorage.setItem("exerciseProgress", JSON.stringify(commands));
  alert("Progress berhasil disimpan!");
}

function resetAll() {
  localStorage.removeItem("exerciseProgress");
  commands = [];
  slots.forEach(slot => slot.innerHTML = '');
}

function complite() {
  window.location.href = "/html/complite.html"
}

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    const value = textarea.value.trim();
    textarea.value = "";

    const match = value.match(/^img\s+"(.+)"$/i);
    if (match && commands.length < slots.length) {
      const url = match[1];
      commands.push({ type: "img", value: url });
      render();
    } else {
      alert("Perintah tidak dikenali atau slot sudah penuh.");
    }
  }
});

render();



