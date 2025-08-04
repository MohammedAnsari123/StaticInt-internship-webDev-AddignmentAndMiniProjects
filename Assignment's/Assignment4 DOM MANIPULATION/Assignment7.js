document.getElementById("colorBtn").addEventListener("click", () =>{
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => p.style.color = 'green')
})



// document.getElementById("colorBtn").addEventListener("click", () => {
//     document.querySelector("p").style.color = 'green'
// })