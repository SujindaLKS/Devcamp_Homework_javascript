const draw9 = function(n) {
    let text = '';
    for (let i = 1; i <= n; i++) {
        text += i*2;
        text += "\n";
    }
    console.log(text);
}