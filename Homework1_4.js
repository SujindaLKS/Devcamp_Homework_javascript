const draw4 = function(n) {
    let text = '';
    for (let i=1; i <= n; i++) {
        for (let j=0; j < n; j++) {
            text += i;
        }
        text += "\n";
    }
    console.log(text);
}