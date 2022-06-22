module.exports = function toReadable (number) {
    let unit = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let between = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let dozen = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",];
    let hundred = " hundred";
    let res = '';

    if (number == 0) {
        return "zero";
    }
    
    let x1 = number % 10;
    let x2 = (number % 100 - x1) / 10;
    let x3 = (number - x2 * 10 - x1) / 100;

    if (x3) {
        res += unit[x3] + hundred + " ";
    }

    if (x2) {
        if (x2 >= 2) {
            res += dozen[x2] + " ";
        }
    
        if ((x2 * 10 + x1) >= 10 && x2 < 2) {
            res += between[x1];
        }
    }
    
    if (x1 && x2 != 1) {
        res += unit[x1];
    }

    return res.trim();
}
