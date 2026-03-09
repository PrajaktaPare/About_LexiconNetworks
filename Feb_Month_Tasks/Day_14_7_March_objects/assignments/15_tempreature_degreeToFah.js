//Create an object temperature with celsius. Add a method to convert it to Fahrenheit.

const tempConvert=
{
    celsius:40,
    tempInFahrenheit: function(){
        return (this.celsius * 9/5) + 32;
    }
}

console.log(tempConvert.tempInFahrenheit())