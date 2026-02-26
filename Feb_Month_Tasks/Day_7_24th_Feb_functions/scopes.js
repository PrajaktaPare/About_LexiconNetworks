// block scopes
// lexical scope
// global scope effect in functions

var global_var="global"
function scopeCheck(){
    let function_var="function"
    if(true){
        let block_var="block"
    
    function inner(){
        console.log(global_var)
        console.log(function_var)
        console.log(block_var)
        }
    }
    inner()

    console.log(block_var)
}

scopeCheck()