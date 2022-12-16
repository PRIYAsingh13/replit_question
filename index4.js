// INTERMEDIATE CLASS QUESTION

//   ------RIGHT TRIANGLE-----
// Take two numbers as input perpendicular and base respectively and write a program to print the hypotenuse of the right angle triangle.
// function hypotenuse(perpendicular,base){
//     let bSquare = base**2;
//     let psquare = perpendicular**2;
//     let sum = bSquare+psquare;
//     let hypotenuse = Math.sqrt(sum)
//     return hypotenuse;
// }
// console.log(hypotenuse(3,4))

// Write a program to print the area of a circle by taking the radius as input.

// function calculateArea(radius){
//     let area = Math.PI*radius*radius;
//     return area;

// }
// console.log(calculateArea(4))

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are given.

// function area(a,b,c){
//     let s = a+b+c/2;
//     let x = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     return x
// }
// console.log(area(-3,4,5))

// Write a JavaScript program to get the difference between a given number and 13.

// function difference(num){
//     return num -13;
// }
// console.log(difference(17))

// ## Take input a as a number and b as percentage. Write a program to calculate the percentage of a number.

// function percent (num,percentage){
//     let percent = num*percentage/100;
//     return percent
// }
// console.log(percent(20,5))

// ## Write a program to print the sum of area and perimeter of the circle.
// function sumAreaPerimeter(radius) {
//   let perimeter =  Math.PI * radius*2;
//   let area = Math.PI * radius ** 2;
//   sum = perimeter + area;

//   return sum;
// }
// console.log(sumAreaPerimeter(25));

// ## Write a code to take time in seconds and convert it into hour, mins and seconds

function time(seconds){
    let hours = Math.floor(seconds/3600);
    let minutes = Math.floor(seconds/60)-hours*60
    let sec = seconds % 60;
    return (hours+":"+minutes+":"+sec);

}
console.log(time(2000))
