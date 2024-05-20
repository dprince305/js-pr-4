const celsiusToFahrenheit = (c) => {

    return (f = (c * 1.8) + 32);
}

let f, c = 30;

f = celsiusToFahrenheit(c);

document.getElementById("celsius").innerHTML = (`Celsius = ${c} To Fahrenheit = ${f}`);