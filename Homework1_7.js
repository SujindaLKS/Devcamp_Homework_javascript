const draw7 = function(n) {
    let text = '';
    let startNum = 1;
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            text += startNum++;
        }
        text += "\n";
    }
    console.log(text);
}