//Part 1 Thinking Functionally=======

//The second function makes the most sense because it is concise and easily readable.

// function reverseString2(str) {
//     return str.split("").reverse().join("");

// Take an array of numbers and return the sum.
 const numbers = [15, 25, 35, 45, 55];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// Take an array of numbers and return the average.

function  averageArray() {
    const total = sum
    return total / numbers.length;
}
console.log(averageArray([15, 25, 35, 45, 55]));

// Take an array of strings and return the longest string.

const strArray = ["dancing, reading", "walking", "biking", "jogging"];
const strArray2= ["pastas","desserts", "snacks"];
function longestString(strg){
    let longest="";
    for (i = 0; i< strg.length; i++){
        if (strg[i].length > longest.length); {
            longest.strg[i]
            console.log(longest); 
        }
    longestString(strArray);
    longestString(strArray2);
};


// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 


function printUntiln(number) {
    let current = 1;
    while ( current !== number){
    // if (current === number ) {
    //   console.log(current);
    } if (current < number){
        current++;
        // console.log(current);
} else if (current > number) {
         current --;
}else {
    console.log("Please insert numeric number");
    
}
        if (current !== number){
            console.log(current);
        } 

         }
  
printUntiln();


//Part 2    Thinking Merhodically

const dataArray= 

[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

    const sortedArray = dataArray.sort((a,b) => a.age -b.age) //Sort the array by age.

console.log(sortedArray);

    const filteredArray = sortedArray.filter((person) => person.age > 50) //Filter array to remove entries with an age > 50.

   console.log(filteredArray);

   //Map the array to change the “occupation” key to “job” and increment every age by 1.

//    let mappedData = data.map(person => ({
//     ...person,
//     job: person.occupation,
//     age: String(Number(person.age) + 1)
//   }));
//   console.log(mappedData);
  
   
  //Use the reduce method to calculate the sum of the ages.

   const ages = [19,, 25, 41, 58, 111];
const ageSum = ages.reduce((acc, num) => acc + num, 0);
console.log("Sum:", ageSum);


//Then use the result to calculate the average age.

function  averageAge() {
    const total = ageSum
    return total / ages.length
}
// console.log(averageAge(["19", "25", "41", "58", "111"]));
console.log(averageAge(["19", "25", "41", "58", "111"]));
};