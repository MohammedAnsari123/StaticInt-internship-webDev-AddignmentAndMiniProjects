// 1. Change heading text on click
document.getElementById('mainHeading').addEventListener('click', () => {
    document.getElementById('mainHeading').textContent = 'Welcome to DOM World';
});

// 2. Add new paragraph inside #container
document.getElementById('addParaBtn').addEventListener('click', () => {
    const newPara = document.createElement('p');
    newPara.textContent = 'New Content';
    document.getElementById('container').appendChild(newPara);
});

// 3. Hide image on button click
document.getElementById('hideBtn').addEventListener('click', () => {
    document.getElementById('imageToHide').style.display = 'none';
});

// 4. Add list item to unordered list
document.getElementById('addItemBtn').addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'New List Item';
    document.getElementById('myList').appendChild(li);
});

// 5. Delete last list item
document.getElementById('deleteItemBtn').addEventListener('click', () => {
    const list = document.getElementById('myList');
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});

// 6. Greet user on form submission
document.getElementById('nameForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    document.getElementById('greeting').textContent = `Hello, ${name}!`;
});

// 7. Change paragraph text color to green
document.getElementById('colorBtn').addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => p.style.color = 'green');
});
