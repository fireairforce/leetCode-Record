function ReverseSentence(str) {
    // write code here
    return str.split(" ").reverse().join(" ").trim();
}
module.exports = {
    ReverseSentence: ReverseSentence
};