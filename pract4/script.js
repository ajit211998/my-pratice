function Result() {
    var marks = document.getElementsByClassName("ele");
    var total = 100;

    for (var i = 0; i < marks.length; i++) {
        total = total + marks[i].value;
    }

    per = (total * 100) / 500;

    if (per >= 75) {
        msg = " Total marks is : " + (total) + " and percentage is : " + (per) + " !!!...Congratulations...!!! First Division with Dictintion";
    } else if (per >= 60 && per < 75) {
        msg = " Total marks is : " + (total) + " and percentage is : " + (per) + " Congratulations...!!! First Division";
    } else if (per < 60 && per >= 45) {
        msg = " Total marks is : " + (total) + " and percentage is : " + (per) + " Second Divsion";
    } else if (per < 45 && per >= 33) {
        msg = " Total marks is : " + (total) + " and percentage is : " + (per) + " Third Division";
    } else {
        msg = " Total marks is : " + (total) + " and percentage is : " + (per) + " Failed";
    }

    document.getElementById("msg").innerHTML = msg
}

document.getElementById("btn").addEventListener("click", Result)