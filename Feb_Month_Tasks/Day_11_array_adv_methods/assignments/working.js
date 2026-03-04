//foreach
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            callback(this[i], i, this)
        }
    }
}

//map
Array.prototype.myMap = function(callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result[i] = callback(this[i], i, this)
        }
    }
    return result
}

//filter
Array.prototype.myFilter = function(callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (callback(this[i], i, this)) {
                result.push(this[i])
            }
        }
    }
    return result
}

//reduce
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue
    let startIndex = 0

    if (accumulator === undefined) {
        accumulator = this[0]
        startIndex = 1
    }

    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this)
        }
    }

    return accumulator
}