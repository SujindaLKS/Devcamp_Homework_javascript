const draw6 = function(n) {
    let text = '';
    let startNum = 1;
    for (let i = 1; i <= n; i++) {
        for (let j=1; j <= n; j++) {
            text += startNum++;
        }
        text += "\n";
    }
    console.log(text);
}