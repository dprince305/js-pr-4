
const formula = (a, b, c) => {

    return (ans = ((b * b) * (4 * a * c) / (2 * a)));
}

let a = 15, b = 20, c = 25, ans;

ans = formula(a, b, c);

document.getElementById("p").innerHTML = (`A is = ${a}`);
document.getElementById("q").innerHTML = (`B is = ${b}`);
document.getElementById("r").innerHTML = (`C is = ${c}`);
document.getElementById("answer").innerHTML = (`Answer is = ${ans}`);