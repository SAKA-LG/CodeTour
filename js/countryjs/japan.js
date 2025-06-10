const input = document.getElementById("Inputjapan")
const slotjapan = document.getElementById("slot0")
const saves = document.getElementById('saves')
const bgJapan = document.getElementById("backgroundJapan")

let editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' }})
require(['vs/editor/editor.main'], function () {
editor = monaco.editor.create(document.getElementById('editor'), {
value: `//type Task`,
language: 'javascript',
theme: 'vs-dark',
fontSize: 12,
minimap: { enabled: false }
})
})

document.getElementById('saves').addEventListener('click', function () {
const userCode = editor.getValue()
try {
new Function(userCode)()
} catch (err) {
  alert("Error: " + err.message)
}

function resetAll() {
  if (editor) editor.setValue('')
}

function complite() {
  alert("Code submitted! (simulasi)")
}

function resetAll() {
  window.location.reload()
}
})
function complite() {
  window.location.href = "/html/complite.html"
}