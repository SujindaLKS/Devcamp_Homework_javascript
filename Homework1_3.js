const draw3 = function(n) {
    let text = '';
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            text += j+1;
        }
        text += "\n";
    }
    console.log(text);
}