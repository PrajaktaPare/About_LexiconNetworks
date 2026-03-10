//Create an object rectangle with length and width. Add a method to calculate area.


const rectangle={
    length:12,
    width:13,
    area:function (){
        return this.length*this.width
    }
}
console.log("Area : ",rectangle.area())

//call method
