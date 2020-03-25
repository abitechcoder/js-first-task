const name = "Adeosun Abiola Olalekan";
const courses = [
    'HTML', 
    'CSS', 
    'JavaScript',
    'Node.js'
]

console.log(`\nMy name is ${name}.`);
console.log('\nThe courses i am offering on start.ng internship are:');
courses.forEach((course) => {
    console.log(course)
})

if (courses.length%2 === 0){
    console.log("\nAll even numbers from 1 - 200:")
    for(let i=2; i<=200; i+=2){
        console.log(i)
    }
}else{
    console.log("\nAll odd numbers from 1 - 200:")
    for(let i=1; i<=200; i+=2){
        console.log(i)
    }
}
