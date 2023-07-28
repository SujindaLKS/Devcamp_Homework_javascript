const draw28 = function(n) {
    let text = '';
    let count = 1;
    for (let i = 1; i <= 2*n-1; i++) {
        if (i <= n) {
            for (let j = 1; j <= n-i; j++) {
                text += "_";
            }
            for (let k = 1; k <= i; k++) {
                text += count++;
            }
        }
        else{
            for (let j = 1; j <= i-n; j++) {
                text += "_";
            }
            for (let k = 1; k <= 2*n-i; k++) {
                text += count++;
            }
        }
            
        text += "\n";
    }

    console.log(text);
}