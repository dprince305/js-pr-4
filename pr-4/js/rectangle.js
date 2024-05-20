const areaOfRectangle = (l, h) => {

    area = l * h;
    return (area);
}

let l = 10, h = 20, area;

area = areaOfRectangle(l, h);

document.getElementById("length").innerHTML = (`Length is = ${l}`);
document.getElementById("height").innerHTML = (`Height is = ${h}`);
document.getElementById("area").innerHTML = (`Area of Rectangle is = ${area}`);