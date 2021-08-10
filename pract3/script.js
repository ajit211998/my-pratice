function PayableAmount() {
    var amt = parseInt(document.getElementById("txt").value)
    var msg = ""

    if (amt >= 5000) {
        dis = (amt * (30 / 100));
        amt = amt - dis;
        msg = "Discount on this amount is Rs. " + (dis) + " and payable ammount is : Rs. " + (amt);
    } else if (amt >= 3000 && amt < 5000) {
        dis = (amt * (20 / 100));
        amt = amt - dis;
        msg = "Discount on this amount is Rs. " + (dis) + " and payable ammount is : Rs. " + (amt);
    } else if (amt >= 2000 && amt < 3000) {
        dis = (amt * (15 / 100));
        amt = amt - dis
        msg = "Discount on this amount is Rs. " + (dis) + " and payable ammount is : Rs. " + (amt);
    }

    document.getElementById("msg").innerHTML = msg
}

document.getElementById("btn").addEventListener("click", PayableAmount)