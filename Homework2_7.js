const draw27 = function(n) {
    let text = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n-i; j++) {
            text += "_";
        }
        for (let k = 1; k <= i; k++) {
            text += "*"
        }
            
        text += "\n";
    }

    for (let i = n-1; i >= 1; i--) {
        for (let j = 1; j <= n-i; j++) {
            text += "_";
        }
        for (let k = 1; k <= i; k++) {
            text += "*"
        }
            
        text += "\n";
    }

    console.log(text);
}