let x = 1;
let result;

switch (typeof x) {
    case "number":
        result = "x — число";
        break;
    case "string":
        result = "x - строка";
        break;
    case "boolean":
        result = "x - логическое"
        break;
    default:
        result = "тип не определён"
}
console.log(result);