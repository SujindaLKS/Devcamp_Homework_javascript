const draw11 = function(n) {
    let text = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if(j === i){
                text += "_";
            }
            else{
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}