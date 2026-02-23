// Reverse a number using loop





function reverse_num(num){
    let reversed = 0;
    
    while (num > 0) {
        const digit = num % 10;// get last digit
        reversed = reversed * 10 + digit; 
         num = Math.floor(num / 10);   
    }

    console.log(reversed);// 54321

    
}

let num = 12345;
reverse_num(num)