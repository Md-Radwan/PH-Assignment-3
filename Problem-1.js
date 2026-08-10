/* Problem 1 statement:  Function Name Must be: studentIntroduction 
 একটি Online Learning Platform নতুন Student Registration-এর পরে একটি Introduction Message তৈরি করতে চায়।
 Input: Function একটি Object গ্রহণ করবে।
Output: Template Literal ব্যবহার করে Return করবে—
My name is Rafi. I am 18 years old. I am learning JavaScript.
Challenge:
Return "Invalid"
যদি Input Object না হয়;
অথবা name, age অথবা course property না থাকে
*/

function studentIntroduction(student) {
  // Write your code here
  if (typeof student !== "object" || student.name === undefined || student.age === undefined || student.course === undefined) {
    return "Invalid"
  }else{
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
  }
}

console.log(studentIntroduction({name:"Rafi",age:18,course:"JavaScript"}));
console.log(studentIntroduction({age:18,course:"JavaScript"}));
console.log(studentIntroduction({name:"Rafi",course:"JavaScript"}));
console.log(studentIntroduction({name:"Rafi",age:18}));
console.log(studentIntroduction({}));
console.log(studentIntroduction("student"));

