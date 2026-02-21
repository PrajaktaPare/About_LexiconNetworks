//palindrome check( string)

function is_palindrome_str(str){
    str_rev=str.split("").reverse().join("")
    console.log(str_rev)
    if (str==str_rev)
    {
        console.log(`${str} is palindrome`)
    }
}

is_palindrome_str("hello")
is_palindrome_str("madam")

