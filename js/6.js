let arr = [0, 1, 1, 1, 1];
let check = 0;

for (let i = 0; i <= arr.length - 2; i++){ 
    if (arr[i] != arr[i + 1]) {
        check++;
    }
}
if (check > 0) {
    console.log(false);
} else {
    console.log(true);
}