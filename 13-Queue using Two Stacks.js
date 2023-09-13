function processData(input) {
    //Enter your code here
    let arr = input.split("\n");
    let acu;
    let enQueue = [];
    
    
    for(let i = 0; i < arr.length; i++){
        acu = arr[i].split(" ")
        
        //console.log(acu)
        
        switch(acu[0]){
            
            case "1":
                enQueue.push(acu[1])
            break
            
            case "2":
                enQueue.shift()
            break
            
            case "3":
                console.log(enQueue[0])
            break
            
            default:
            break
        
        }
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
