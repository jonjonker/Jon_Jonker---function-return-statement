// Checking if a number is big

// const checkNumber = function(number1) {
//     const sum = number1;
//     if (sum > 100) {
//         return "true"
//     }
//     return "false";
// };

// const result = checkNumber(20);
// console.log(result);


// Bouncer at a club

const checkIfAllowed = function(
    maxVisitors,
    currentVisitors,
    visitorAge,
) {
    if (visitorAge < 18) {
        return "This club is adults only!"
    }

    if (currentVisitors >= maxVisitors) {
        return "come back later, it's too busy now!"
    } else {
        return "Welcome, come in!";
    }
};

console.log(checkIfAllowed(500, 309, 15));
console.log(checkIfAllowed(500, 409, 21));
console.log(checkIfAllowed(500, 500, 21));

// Calculating the average

const calculateAverage = function (
    number1,
    number2,
    number3, 
    number4,
    number5,
){
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    const averageRounded = Math.round(average);
    return averageRounded;
};

console.log(calculateAverage(1,6,8,9,4));