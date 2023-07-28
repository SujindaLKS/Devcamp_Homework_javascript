const draw5 = function(n) {
    let text = '';
    for (let i = n; i >= 1; i--) {
        for (let j=0; j < n; j++) {
            text += i;
        }
        text += "\n";
    }
    console.log(text);
}