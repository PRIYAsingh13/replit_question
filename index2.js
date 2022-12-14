                    // Basic class question

    // -----take a number and print the square-----
    // function square(num){
    //     let square = num*2;
    //     return square;
    // } 
    // console.log(square(2))               
    // --------take two number and only print integer part--
    // function quotient(num1,num2){
    //     let a = Math.floor(num1/num2);
    //     return (a)
    // }
    // console.log(quotient(3,2))

    // ## Take two numbers a,b and print the exponential power of the first number raised by the second

    // function power(num,exp){
    //     let a =  num**exp;
    //     return a
    // }
    // console.log(power(2,5))

    // ## Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b

    // function decimal(num1, num2){
    //     let x = num1/num2 //1.5
    //     let y = Math.floor(num1/num2); //1
    //     let decimalPart = x-y //5
    //     return decimalPart
    // }
    // console.log(decimal(3,2))

    // ## Take the cost price and selling price of a product, and print the profit obtained on the product.

    // function profit(costPrice,sellingPrice){
    //     return sellingPrice-costPrice;
    // }
    // console.log(profit(50,100))

    // ## Take a number and return the first and last digit of the number.
    // function firstAndLast(a){
    //     let first = Math.floor(a/100);//1
    //     let last = a%10 //3
    //     return (first+""+last)
    // }
    // console.log(firstAndLast(123))

    // ## You will be given a two digit number you have to reverse that number----
    function reverse(Number){
    let last= num%10;
    let first =Math.floor(num/10);
    let rev = last*10+first
    return rev
  }
  // let d = twoDigitReverse(94)
  console.log(reverse(94))
  