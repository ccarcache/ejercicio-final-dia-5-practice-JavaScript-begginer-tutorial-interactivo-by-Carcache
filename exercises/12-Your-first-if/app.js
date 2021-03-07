var total = prompt('How many km are left to go?');

// Your code below:

if (parseInt(total) > 100) {
    console.log("Are we there yet?");
} else if (parseInt(total) > 50) {
     console.log("We'll be there in 5 minutes");
} else {
    console.log("I'm parking, I see you right now");
}
