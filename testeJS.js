function palindromo(str) {
    // sobre o split: faz uma lista (divide no espaço), quebra a string em pedaços
    let palavra = str
        .split("").join("")
        .split(",").join("");

    let fraseReverso = palavra
        .split("")
        .reverse("")
        .join("")

    if(palavra === fraseReverso){
        return true 
    }else{
        return false
    }
}

module.exports = palindromo;

console.log(palindromo("ana"))

