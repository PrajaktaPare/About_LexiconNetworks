//Create an object bankAccount with accountHolder, balance. Write a function to deposit money and update balance.

const bankAccount={
    accountHolder:"uName",
    balance:5000
}

function depositMoney(obj,amount){
    obj.balance=obj.balance+amount
    // console.log(obj.balance)
    return obj
}
console.log(obj.balance)
console.log(depositMoney(bankAccount,2000))

//function in objects