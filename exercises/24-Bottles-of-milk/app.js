// Your code here:
function sing() {
        let botellas = " bottles";
        let botellas1 = " bottles";
    for (let i = 99; i > 0; i--) {
        if ((i == 1)) {
            botellas = " bottle";
            botellas1 = " bottles";            
        } else if((i == 2)) {
            botellas1 = " bottle";
        }
        if ((i == 1) ) {
            console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")
        } else {
            console.log((i).toString() + botellas+" of milk on the wall, " + (i).toString() + botellas+" of milk. Take one down and pass it around, " + (i - 1).toString() + botellas1+" of milk on the wall.")
        }    
    }    
}
sing();
//Your code above ^^^
