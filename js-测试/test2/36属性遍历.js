function iterate(obj) {
    return Object.getOwnPropertyNames(obj).map(function (key) {
        return key + ": " + obj[key];
    })
}