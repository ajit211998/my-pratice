function Smallest() {
    var ele = document.getElementsByClassName("ele");

    //ele[3].value = ele[0].value > ele[1].value && ele[0].value > ele[2].value ? ele[0].value : ele[1].value > ele[0].value && ele[1].value > ele[2].value ? ele[1].value : ele[2].value;
    ele[3].value = ele[0].value < ele[1].value && ele[0].value < ele[2].value ? ele[0].value : ele[1].value < ele[0].value && ele[1].value < ele[2].value ? ele[1].value : ele[2].value;

}

var btn = document.getElementById("btn")
btn.addEventListener("click", Smallest);