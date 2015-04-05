var mas = [2, 2, 1, 3, 4, 1, 1, 2];
var count = 0;
var maxCount = 0;
var maxValue = 0;
var i, j;

for (i = 0; i < mas.length; i++) {
    for (j = 0; j < mas.length; j++) {
        if (mas[i] == mas[j]) {
            count++;
        }
    }
    if (maxCount <= count) {
        if (maxValue < mas[i]) {
            maxCount = count;
            maxValue = mas[i];
        }
    }
    count = 0;
}
console.log(maxValue);
console.log(maxCount);