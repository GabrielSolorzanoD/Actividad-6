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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let cont;
    
    for(let i = 0; i < arr.length ; i++){
        for(let o = 0; o < arr.length ; o++){
            if(arr[o] > arr[o + 1]){
                cont = arr[o+1];
                arr[o + 1] = arr[o];
                arr[o] = cont;
            }
        }
    }
    
    let min = arr[0] + arr[1] + arr[2] + arr[3];
    let max = arr[4] + arr[3] + arr[2] + arr[1];
    
    console.log(min + " " + max);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
