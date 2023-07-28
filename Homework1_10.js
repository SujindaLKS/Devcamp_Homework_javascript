const draw10 = function(n) {
    let text = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            text += i*j;
        }
        text += "\n";
    }
    console.log(text);
}