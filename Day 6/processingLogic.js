
function addTimestamp(content) {
    const timestamp = new Date().toDateString();
    return `${timestamp}: ${content}`;
}
//console.log(addTimestamp("Ali here"));

function reverseContent(content) {
    try {
        return content.split('').reverse().join('');
    } catch (error) {
        console.log(error);
    }
}

//console.log(reverseContent("alimohamed"));

function ToUpper(content){
    try {
        return content.toUpperCase();
    } catch (error) {
        console.log(error);
    }
}

//console.log(ToUpper("shfhjjd"));

module.exports = {
    addTimestamp,
    reverseContent,
    ToUpper
};
