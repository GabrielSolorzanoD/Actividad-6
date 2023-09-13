'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    let len = arr.length;
    
    for(const number of arr){
        if(number > 0){
            positivos = positivos + 1
        }
        else if(number < 0){
            negativos = negativos +1
        }
        else if(number === 0){
            ceros = ceros + 1
        }
    }
    
    console.log((positivos/len).toFixed(6));
    console.log((negativos/len).toFixed(6));
    console.log((ceros/len).toFixed(6));

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
