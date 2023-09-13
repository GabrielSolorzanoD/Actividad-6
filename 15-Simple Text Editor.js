function processData(input) {
    //Enter your code here
    const lines = input.split('\n');
    let s = '';
    const stack = [];
    stack.push(s);
    
    

    const q = parseInt(lines[0]);

    for (let i = 1; i <= q; i++) {
        const splitLine = lines[i].split(' ');
        const operation = parseInt(splitLine[0]);
        const argument = splitLine[1];

        switch (operation) {
            
        case 1:
            s += argument;
            stack.push(s);
        break;
        
        case 2:
            s = s.substring(0, s.length - parseInt(argument));
            stack.push(s);
        break;
        
        case 3:
            console.log(s.charAt(parseInt(argument) - 1));
        break;
            
        case 4:
            stack.pop();
            s = stack[stack.length - 1];
        break;
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
