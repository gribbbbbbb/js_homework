let a = prompt("Введите значение = ");
 
if ((typeof(+a) == "number") && (!isNaN(+a))) {
    if (a % 2 == 0) {
         console.log("Число чётное");
    } else {
         console.log("Число нечётное");
    }
} else {
     console.log("Упс, кажется, вы ошиблись");
}