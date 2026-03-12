function mathMethodsDemo(){

// Math.floor()

console.log("Math.floor(4.9) :", Math.floor(4.9))          // 4
console.log("Math.floor(4.1) :", Math.floor(4.1))          // 4
console.log("Math.floor(-4.1) :", Math.floor(-4.1))        // -5
console.log("Math.floor(-4.9) :", Math.floor(-4.9))        // -5
console.log("Math.floor('4.7') :", Math.floor("4.7"))      // 4
console.log("Math.floor(null) :", Math.floor(null))        // 0
console.log("Math.floor(true) :", Math.floor(true))        // 1
console.log("Math.floor(NaN) :", Math.floor(NaN))          // NaN
console.log("Math.floor(Infinity) :", Math.floor(Infinity))// Infinity


// Math.ceil()

console.log("Math.ceil(4.1) :", Math.ceil(4.1))            // 5
console.log("Math.ceil(4.9) :", Math.ceil(4.9))            // 5
console.log("Math.ceil(-4.1) :", Math.ceil(-4.1))          // -4
console.log("Math.ceil(-4.9) :", Math.ceil(-4.9))          // -4
console.log("Math.ceil('4.2') :", Math.ceil("4.2"))        // 5
console.log("Math.ceil(null) :", Math.ceil(null))          // 0
console.log("Math.ceil(true) :", Math.ceil(true))          // 1
console.log("Math.ceil(NaN) :", Math.ceil(NaN))            // NaN
console.log("Math.ceil(-0.5) :", Math.ceil(-0.5))          // -0


// Math.round()

console.log("Math.round(4.2) :", Math.round(4.2))          // 4
console.log("Math.round(4.5) :", Math.round(4.5))          // 5
console.log("Math.round(4.6) :", Math.round(4.6))          // 5
console.log("Math.round(-4.2) :", Math.round(-4.2))        // -4
console.log("Math.round(-4.5) :", Math.round(-4.5))        // -4
console.log("Math.round(-4.6) :", Math.round(-4.6))        // -5
console.log("Math.round('4.7') :", Math.round("4.7"))      // 5
console.log("Math.round(null) :", Math.round(null))        // 0
console.log("Math.round(NaN) :", Math.round(NaN))          // NaN


// Math.trunc()

console.log("Math.trunc(4.9) :", Math.trunc(4.9))          // 4
console.log("Math.trunc(4.1) :", Math.trunc(4.1))          // 4
console.log("Math.trunc(-4.9) :", Math.trunc(-4.9))        // -4
console.log("Math.trunc(-4.1) :", Math.trunc(-4.1))        // -4
console.log("Math.trunc('4.9') :", Math.trunc("4.9"))      // 4
console.log("Math.trunc(true) :", Math.trunc(true))        // 1
console.log("Math.trunc(null) :", Math.trunc(null))        // 0
console.log("Math.trunc(NaN) :", Math.trunc(NaN))          // NaN


// Math.random()

console.log("Math.random() :", Math.random())              // random number between 0 and 1
console.log("Random 0-9 :", Math.floor(Math.random()*10))  // 0–9
console.log("Random 1-10 :", Math.floor(Math.random()*10)+1) // 1–10
console.log("Random 10-20 :", Math.floor(Math.random()*(20-10+1))+10) // 10–20


// Math.max()

console.log("Math.max(1,5,10) :", Math.max(1,5,10))        // 10
console.log("Math.max(-1,-5) :", Math.max(-1,-5))          // -1
console.log("Math.max('5',2) :", Math.max("5",2))          // 5
console.log("Math.max() :", Math.max())                    // -Infinity
console.log("Math.max(NaN,5) :", Math.max(NaN,5))          // NaN
console.log("Math.max(NaN,5) :", Math.max(5,NaN))          //NaN


// Math.min()

console.log("Math.min(5,2,10) :", Math.min(5,2,10))        // 2
console.log("Math.min(-1,-5) :", Math.min(-1,-5))          // -5
console.log("Math.min('2',1) :", Math.min("2",1))          // 1
console.log("Math.min() :", Math.min())                    // Infinity
console.log("Math.min(NaN,5) :", Math.min(NaN,5))          // NaN


// Math.sign()

console.log("Math.sign(10) :", Math.sign(10))              // 1
console.log("Math.sign(-5) :", Math.sign(-5))              // -1
console.log("Math.sign(0) :", Math.sign(0))                // 0
console.log("Math.sign(-0) :", Math.sign(-0))              // -0
console.log("Math.sign('10') :", Math.sign("10"))          // 1
console.log("Math.sign(null) :", Math.sign(null))          // 0
console.log("Math.sign(NaN) :", Math.sign(NaN))            // NaN


// Math.pow()

console.log("Math.pow(2,3) :", Math.pow(2,3))              // 8
console.log("Math.pow(5,2) :", Math.pow(5,2))              // 25
console.log("Math.pow(9,0.5) :", Math.pow(9,0.5))          // 3
console.log("Math.pow(2,0) :", Math.pow(2,0))              // 1
console.log("Math.pow(2,-1) :", Math.pow(2,-1))            // 0.5
console.log("Math.pow(NaN,2) :", Math.pow(NaN,2))          // NaN


// Math.sqrt()

console.log("Math.sqrt(25) :", Math.sqrt(25))              // 5
console.log("Math.sqrt(16) :", Math.sqrt(16))              // 4
console.log("Math.sqrt(0) :", Math.sqrt(0))                // 0
console.log("Math.sqrt(-1) :", Math.sqrt(-1))              // NaN
console.log("Math.sqrt(Infinity) :", Math.sqrt(Infinity))  // Infinity


// Math.abs()

console.log("Math.abs(-10) :", Math.abs(-10))              // 10
console.log("Math.abs(10) :", Math.abs(10))                // 10
console.log("Math.abs(-3.4) :", Math.abs(-3.4))            // 3.4
console.log("Math.abs(null) :", Math.abs(null))            // 0
console.log("Math.abs('5') :", Math.abs("5"))              // 5
console.log("Math.abs(NaN) :", Math.abs(NaN))              // NaN
console.log("Math.abs(-0) :", Math.abs(-0))                // 0


// Math.log()

console.log("Math.log(10) :", Math.log(10))            // 2.302585092994046
console.log("Math.log(1) :", Math.log(1))              // 0
console.log("Math.log(0) :", Math.log(0))              // -Infinity
console.log("Math.log(-5) :", Math.log(-5))            // NaN
console.log("Math.log('10') :", Math.log("10"))        // 2.302585092994046
console.log("Math.log(null) :", Math.log(null))        // -Infinity
console.log("Math.log(true) :", Math.log(true))        // 0



// Math.cbrt()

console.log("Math.cbrt(27) :", Math.cbrt(27))          // 3
console.log("Math.cbrt(8) :", Math.cbrt(8))            // 2
console.log("Math.cbrt(64) :", Math.cbrt(64))          // 4
console.log("Math.cbrt(-27) :", Math.cbrt(-27))        // -3
console.log("Math.cbrt(0) :", Math.cbrt(0))            // 0
console.log("Math.cbrt('125') :", Math.cbrt("125"))    // 5
console.log("Math.cbrt(null) :", Math.cbrt(null))      // 0
console.log("Math.cbrt(NaN) :", Math.cbrt(NaN))        // NaN

}

mathMethodsDemo()