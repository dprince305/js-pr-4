const fahrenheitToCelsius = (f) => {

    return (c = (f - 32) / 1.8);
}

let f = 194, c;

c = fahrenheitToCelsius(f);

document.getElementById("fahrenheit").innerHTML = (`Fahrenheit = ${f} To Celsius = ${c}`);