let textField = document.getElementById("text-field")
let saveBtn = document.getElementById("save-btn")
let loadBtn = document.getElementById("load-btn")

saveBtn.addEventListener('click', ()=> {
    let textEntered = textField.value
    localStorage.setItem("textEntered", textEntered)
    alert('Saved text successfully')
})

loadBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    let savedText = localStorage.getItem("textEntered")
    if (savedText !== null) {
        textField.value = savedText
    } else {
        alert('No text found')
    }
})