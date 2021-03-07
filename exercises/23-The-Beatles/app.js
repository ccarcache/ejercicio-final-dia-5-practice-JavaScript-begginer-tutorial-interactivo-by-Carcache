function sing() {
    let valor = "let it be,";
    for (let i = 1; i < 12; i++) {
        if ((i < 4) || (i > 4 && i < 10)) {
            valor = valor + " let it be,"
        } else if ((i == 4)) {
            valor = valor + " words of wisdom,"
        } else if (i == 10) {
            valor = valor + " there will be an answer,"
        } else {
            valor = valor + " let it be"
        }
    }
    return valor;
}

//Your code above ^^^

console.log(sing())