let arr = [4, 2, 0, null, 5, 'a', null, 2];
let odd = 0;
let even = 0;
let zero = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == 0) {
        zero++;
    } else {
        if (typeof(arr[i]) == "number") {
            if (arr[i] % 2 ==0) {
                even++;
            } else {
                odd++;
            }
        }
    }
}
console.log("нечётных = ", odd);
console.log("чётных = ", even);
console.log("нулей = ", zero);