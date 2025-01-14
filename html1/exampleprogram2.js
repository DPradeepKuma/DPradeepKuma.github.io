// 2. Consider this array: Students= [‘Kamna’, ’Karunesh’, ’Vishal’, ’Ankit’, ’Karan’] and perform the given operation on this:
// a)	Find the length of the given array (students)
// b)	Insert (–) after each element.
// c)	Replace Komal with ‘Abhishek’ using splice method
// d)	Check if ‘Karan’ is present in the array.
// e)	Return the position of Abhishek from the array.
// f)	Insert ‘Aayush’ at index 0 and ‘Aman’ at the last
// g)	Remove ‘Aayush’ from index 0 and ‘Aman’ from last
// h)	Return String Karunesh, Abhishek, Kartik from array student                                                           (15)


let Students = ["Kamna", "Karunesh", "Vishal", "Ankit", "Karan"]
console.log(Students)
console.log("Find the length of the given array students")
console.log("The length is:", Students.length)

console.log("Insert (–) after each element.")
console.log(Students.join("-"))


console.log("Array after replacing Kamna with 'Abhishek':");
let index = Students.indexOf('Kamna');
Students.splice(index, 1, 'Abhishek');
console.log(Students)


console.log("Is 'Karan' present in the array?")
console.log(Students.includes('Karan') ? "Yes" : "No");

console.log("Return the position of Abhishek from the array.") 
console.log(Students.indexOf('Abhishek'))

console.log("Insert ‘Aayush’ at index 0 and ‘Aman’ at the last")
Students.unshift('Ayush')
Students.push('Aman')
console.log(Students)

console.log("Remove ‘Aayush’ from index 0 and ‘Aman’ from last")
Students.shift()
Students.pop()
console.log(Students)

console.log("Return String Karunesh, Abhishek, Kartik from array student")
let required = Students.filter(array => ['Karunesh', 'Abhishek', 'Kartik'].includes(array));
console.log(required) 