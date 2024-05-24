function palindromeIntegers(arr) {
    for (let num of arr) {
        let isPalindrom = checkPalindrom(num);
        console.log(isPalindrom);
        function checkPalindrom(number) {
            let numAsString = number.toString();
            let revNumAsString = numAsString.split(``).reverse().join(``)

            if (numAsString === revNumAsString) {
                return true;
            } else {
                return false;
            }
        }
    }
}
palindromeIntegers([123, 323, 421, 121]);
//palindromeIntegers([32,2,232,1010]);