document.getElementById("addItemBtn").addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "New list Item";
    document.getElementById("myList").appendChild(li);
})