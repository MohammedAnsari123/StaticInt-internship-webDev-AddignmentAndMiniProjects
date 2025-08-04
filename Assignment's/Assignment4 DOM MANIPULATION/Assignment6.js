// document.getElementById("nameForm").addEventListener("submit", (e) => {
//     e.preventDefault();
//     const name = document.getElementById("nameInput").value;
//     document.getElementById("greeting").textContent = `Hello, ${name}`
// })


document.getElementById("nameForm").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value
    document.getElementById("greeting").textContent = `Hello ${name}`
})



