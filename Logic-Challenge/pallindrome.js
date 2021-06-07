const pallindrom = (str)=>{
    let reverseWord = ''
    let result = ''

    for(let i = str.length-1; i >= 0; i--){
        reverseWord = reverseWord + str[i]
    }
    if(reverseWord === str){
        result = "pallindrom"
    } else {
        result = "not pallindrom"
    }
    return result
}
console.log(pallindrom('radar')); //pallindrome
console.log(pallindrom('malam')); //pallindrome
console.log(pallindrom('kasur ini rusak')); //pallindrome
console.log(pallindrom('ibu ratna antar ubi')); //pallindrome
console.log(pallindrom('malas')); //not pallindrome
console.log(pallindrom('makan nasi goreng')); // not pallindrome
console.log(pallindrom('balonku ada lima')); //not pallindrome

