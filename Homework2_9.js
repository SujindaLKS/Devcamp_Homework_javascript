const draw29 = function(n) {
    let text = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n-i; j++) {
            text += "_";
        }
        for (let k = 1; k <= 2*i-1; k++) {
            text += "*";
        }
        for (let j = 1; j <= n-i; j++) {
            text += "_";
        }
            
        text += "\n";
    }

    console.log(text);
}