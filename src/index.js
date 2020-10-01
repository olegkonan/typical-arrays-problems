
exports.min = function min (array) {
    if (array == undefined || array[0] == undefined) {
        return 0;
    } else {
        const sortedArr = array.sort(function(a, b) {
            return a - b;
        })
        return sortedArr[0];
    }
}

exports.max = function max (array) {
    if (array == undefined || array[0] == undefined) {
        return 0;
    } else {
        const sortedArr = array.sort(function(a, b) {
            return a - b;
        })
        return sortedArr[array.length - 1];
    }
}

exports.avg = function avg (array) {
    if (array == undefined || array[0] == undefined) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return sum / array.length;
    }
}
