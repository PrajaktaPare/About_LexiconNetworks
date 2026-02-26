function primenum(n){
    for (let i=2;i<n;i++)
    {
        if(n%i==0)
        {
            return false
        }
       
    }
    return true
}

console.log(primenum(11))
console.log(primenum(9))