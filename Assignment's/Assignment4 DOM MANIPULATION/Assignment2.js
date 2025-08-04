document.getElementById("addParaBtn").addEventListener("click", () => {
    const newPara = document.createElement("p");
    newPara.textContent = "New Content";
    document.getElementById("container").appendChild(newPara)
})