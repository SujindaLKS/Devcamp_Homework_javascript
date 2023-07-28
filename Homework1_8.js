const draw8 = function(n) {
    let text = '';
    for (let i = 0; i <= n-1; i++) {
        text += i*2;
        text += "\n";
    }
    console.log(text);
}