const areaOfTriangle = (l, h) => {

    area = (l * h) / 2;
    return (area);
}

let l, h, area;

l = 10;
h = 20;

area = areaOfTriangle(l, h);

document.getElementById("length").innerHTML = (`Length is = ${l}`);
document.getElementById("height").innerHTML = (`Heght is = ${h}`);
document.getElementById("area").innerHTML = (`Triangle of Area is = ${area}`);