//Create an object bankAccount with balance. Write a function to withdraw money.

const bankAccount={
    balance:10000
}

function withdrawMoney(obj,amount){
    if (obj.balance>=amount){
        obj.balance=obj.balance-amount
        // console.log(obj.balance)
        return obj
    }
    else{
        return "Insufficient balance!"
    }
    
}

console.log(withdrawMoney(bankAccount,3000))
console.log(withdrawMoney(bankAccount,13000))