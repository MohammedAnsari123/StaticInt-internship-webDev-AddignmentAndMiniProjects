document.getElementById("deleteItemBtn").addEventListener("click", () => {
    const list = document.getElementById("myList");
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
})