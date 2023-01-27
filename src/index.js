module.exports = function toReadable (number) {
    let res = '';
    const arr1 = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    const arr2 = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arr3 = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let num = String(number);
    if (num.length === 1) {
        res = arr1[number];
    } else if (num.length === 2 && number < 20) {
        res = arr2[number - 10];
    } else if (number > 19 && number < 100 && num[1] === '0') {
        res = arr3[Number(num[0]) - 2];
    } else if (number > 20 && number < 100 && num[1] !== '0') {
        res = arr3[Number(num[0]) - 2] + ' ' + arr1[num[1]];
    } else if (num.length === 3 && num[1] === '0' && num[2] === '0') {
        res = arr1[Number(num[0])] + ' ' + 'hundred';
    } else if (num.length === 3 && num[1] !== '0' && num[1] !== '1' && num[2] === '0') {
        res = arr1[Number(num[0])] + ' ' + 'hundred' + ' ' + arr3[Number(num[1]) - 2];
    } else if (num.length === 3 && num[1] !== '0' && num[1] !== '1' && num[2] !== '0') {
        res = arr1[Number(num[0])] + ' ' + 'hundred' + ' ' + arr3[Number(num[1]) - 2] + ' ' + arr1[Number(num[2])];
    } else if (num.length === 3 && num[1] === '1') {
        res = arr1[Number(num[0])] + ' ' + 'hundred' + ' ' + arr2[Number(num.slice(1, 4)) - 10];
    } else if (num.length === 3  && num[1] === '0' && num[2] !== '0') {
        res = arr1[Number(num[0])] + ' ' + 'hundred' + ' ' + arr1[Number(num[2])];
    } 
    return res;
};
