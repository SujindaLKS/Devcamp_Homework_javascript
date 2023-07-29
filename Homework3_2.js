const drawH32 = function(n) {
  let text = '';
  let left = n;
  let right = n;
  let number = 1
  for (let row = 1; row <= 2 * n - 1; row++) {
    for (let col = 1; col <= 2 * n - 1; col++) {
      if (col >= left && col <= right) {
        text += number.toString();
        number++;
      } else {
        text += "-";
      }
    }
    if (row < n){
        left -= 1
        right += 1
    }
    else {
        left += 1
        right -= 1
    }
    text += "\n";
    }
    console.log(text);
}