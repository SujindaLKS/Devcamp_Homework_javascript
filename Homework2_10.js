const draw210 = function(n) {
    let text = '';
    for (let i = n; i >= 1; i--) {
        for (let j = n; j > i; j--) {
            text += "_";
        }
        for (let k = 1; k <= 2*i-1; k++) {
            text += "*";
        }
        for (let j = n; j > i; j--) {
            text += "_";
        }
            
        text += "\n";
    }

    console.log(text);
}