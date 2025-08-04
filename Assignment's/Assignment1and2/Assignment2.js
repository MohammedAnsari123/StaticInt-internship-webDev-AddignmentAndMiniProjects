// // Question1
// function isPositiveInteger(number) {

//     if(Number.isInteger(number) && number > 0 ) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(isPositiveInteger(65))
// console.log(isPositiveInteger(-9))
// console.log(isPositiveInteger(3.5))
// console.log(isPositiveInteger("10"))


// // Question 2
// function calculateAverage(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number' || !Number(arr[i])) {
//             console.log("Error");
//             return null;
//         }
//     }
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     let average = sum / arr.length;
//     console.log(average);
//     return average;
// }
// console.log(calculateAverage([1, 2, 3, 2.5, 3.2]))
// console.log(calculateAverage([1, 2, "moha"]))
// console.log(calculateAverage(["mdsjh", "dsjhg", "dsgjkb"]))


// Question 3

let student = [
    { Name: "Alice", grade: 50 },
    { Name: "Bob", grade: 70 },
    { Name: "Charlie", grade: 80 }
]
function getGread(name) {
    for (const element of student) {
        if (name == element.Name) {
            // console.log(element.grade)
            return element.grade
        }
        // else {
        //     console.log("Error, -1")
        // }
    }
    return "Error, -1"
}
console.log(getGread("Alice")) // 50
console.log(getGread("Daniel")) // Error, -1
console.log(getGread(100)) // Error, -1


