function reverse_num(num){
    let reversed = 0;
    let original=num
    while (num > 0) {
        const digit = num % 10;// get last digit reminder
        reversed = reversed * 10 + digit; 
         num = Math.floor(num / 10);  //1234.5 
    }

    return original==reversed
    
}

let num=12345
let num2=123321
console.log(reverse_num(num))
console.log(reverse_num(num2))