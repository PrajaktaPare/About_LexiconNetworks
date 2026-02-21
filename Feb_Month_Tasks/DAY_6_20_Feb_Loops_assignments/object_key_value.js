// Print object keys
// Print object values

obj={
    id:1,
    name:"demo",
    email:"demo@gmail.com",
    age:20
}

function object_key(obj)
{
    for(let key of Object.keys(obj))
    {
        console.log(key)
    }
}

function object_value(obj)
{
    for(let value of Object.values(obj))
    {
        console.log(value)
    }
}

function object_keyValue(obj)
{
    for(let [key,value] of Object.entries(obj))
    {
        console.log(key, value)
    }
}

object_key(obj)
object_value(obj)
object_keyValue(obj)