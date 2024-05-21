const swap = (a, b) => {

    a = a + b;
    b = a - b;
    a = a - b;

    document.getElementById("after1").innerHTML = (`After Swapping Number A is = ${a}`);
    document.getElementById("after2").innerHTML = (`After Swapping Number B is = ${b}`);
}

let a = 10, b = 20;

document.getElementById("before1").innerHTML = (`Before Swapping Number A is = ${a}`);
document.getElementById("before2").innerHTML = (`Before Swapping Number B is = ${b}`);

swap(a, b);