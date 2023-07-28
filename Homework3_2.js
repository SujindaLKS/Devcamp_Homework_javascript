const draw32 = function(n) {
    let text = '';
    let numbers = '';
    for (let i = 1; i <= 2 * n - 1; i++) {
        if (i <= n) {
            for (let j = 1; j <= i; j++) {
              numbers += (i + j - 1);
            }
          } else {
            for (let j = 1; j <= 2 * n - i; j++) {
              numbers += (n - j + 1);
            }
          }
        let spacesCount = n - numbers.length;

        for (let j = 1; j <= spacesCount / 2; j++) {
            text += '_';
        }
        text += numbers;
        for (let j = 1; j <= spacesCount / 2; j++) {
            text += '_';
        }
        text += "\n";
    }
    console.log(text);
}