const draw23 = function(n) {
    let text = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            text += "*";
        }
        for (let k = i; k < n; k++) {
            text += "_"
        }
            
        text += "\n";
    }

    for (let i = n-1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            text += "*";
        }
        for (let k = i; k < n; k++) {
            text += "_"
        }
            
        text += "\n";
    }

    console.log(text);
}