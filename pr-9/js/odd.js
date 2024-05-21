const oddOrEven = (no) => {

    if (no % 2 == 1) {
        document.getElementById("odd").innerHTML = (`Your Number ${no} is Odd...`);
    } else if (no % 2 == 0) {
        document.getElementById("even").innerHTML = (`Your Number ${no} is Even...`);
    }
}

let no = 5;

oddOrEven(no);