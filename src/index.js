module.exports = function reverse (n) {
    let result=(n>0) ? Number(String(n).split("").reverse().join("")) : Number(String(-n).split("").reverse().join(""));
    return result;
}
