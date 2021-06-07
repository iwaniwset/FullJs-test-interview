const reverseWord = (str) =>{
    const arr = str.split(" ");
    // console.log(arr, "<<<< ini arr");
    const reversed = arr.map(el => {
       return el.split('').reverse().join("");
    });
    // console.log(reversed, "<<< ini reserved");
    return reversed.join(" ");
}
console.log(reverseWord('Hello World how is it outside'));
