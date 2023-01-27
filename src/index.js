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
    } else if (number > 99 && number < 100 && num[1] !== '0')
    return res;
};
