function replaceSpace(str)
{
    // write code here
    return str.replace(/ /g,'%20')
}

module.exports = {
    replaceSpace : replaceSpace
};