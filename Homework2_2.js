const draw22 = function(n) {
    let text = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if(j <= n - i + 1){
                text += "*";
            }
            else{
                text += "_";
            }
        }
        text += "\n";
    }
    console.log(text);
}