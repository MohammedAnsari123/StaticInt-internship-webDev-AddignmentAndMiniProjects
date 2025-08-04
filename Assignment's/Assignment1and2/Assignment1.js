const statementArray = [
    "Is these christmas?",
    "Yayy! its early",
    "Is it christmas really!",
    "No its not the chritmas",
    "Last month of the year have christmas",
    "Till then finish Javascript"
]
function demo() {
    for (let i = 0; i < statementArray.length; i++) {
        const s = statementArray[i].includes("christmas")
        if (s){
            console.log(statementArray[i])
        }
    }
}
demo()


