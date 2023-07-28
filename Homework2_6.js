const draw26 = function(n) {
    let text = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            text += "_";
        }
        for (let k = i; k <= n; k++) {
            text += "*"
        }
            
        text += "\n";
    }

    console.log(text);
}