/*
1. Create a variable named biggest using the keyword const
2. Assign it a value from using the reduce method on the students array
3. Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method
4. Use a default value with the reduce method
5. Log out the variable biggest to see the value
*/

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// let [john, emily, adam, frank] = students.map(student => [student.name, student.results])
// // console.log("Adam: ", adam)

// const bigestScore = students.filter(student => student.results.english)

const biggest = students.reduce((acc, curr) => {
    let score = curr.results.english;
    let maxScore = acc.max;
    return score > maxScore ? {name: curr.name, max: score} : acc;
}, {name: '', max: 0});

console.log(biggest)


// // 1. Create a variable named biggest using the keyword const
// const biggest = students.reduce((acc, curr) => {
//     // 3. Arrow function inside the reduce method
//     const maxScoreCurr = curr.results.english || 0; // Default to 0 if English score is missing
//     const maxScorePrev = acc.results.english || 0; // Default to 0 if English score is missing
//     return maxScoreCurr > maxScorePrev ? { name: curr.name, max: maxScoreCurr } : acc ;
// }, { name: '', max: 0 }); // 4. Use a default value with the reduce method

// // 5. Log out the variable biggest to see the value
// console.log('biggest:', biggest);