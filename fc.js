function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}

console.log(isLeapYear(2024) ? 'Năm nhuận' : 'Không phải năm nhuận.')
