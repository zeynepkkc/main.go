// Get arguments
var myArgs = process.argv.slice(2);

// Build an string array
var nums = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

// Hold the text for the nums
var inTexts = [];

// Loop
var i = 0;

// For each number
myArgs.forEach(function (number) {
    st = "";
    
    // Split the number into digits
    inNums = number.split("");
    
    // For each digits
    inNums.forEach(function(digit) {
        // Appending the string equivalent to 
        st += nums[parseInt(digit)];
    })
    
    // Add st to inStr array
    inStr[i] = st;
    i++;
})

// Output strings
console.log(inStr.join(","))
