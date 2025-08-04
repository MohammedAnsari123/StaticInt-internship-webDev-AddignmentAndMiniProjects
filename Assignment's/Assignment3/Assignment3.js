var insert = document.getElementById('fruit-list')
var btn = document.getElementById('uniquewid')

function change() {
    insert.lastChild.textContent = 'Blue Berry'
}

btn.addEventListener('dblclick', change)
