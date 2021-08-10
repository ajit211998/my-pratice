function secondMaximum() {

    var ele = document.getElementsByClassName("ele");

    if (ele[0].value >= ele[1].value && ele[0].value >= ele[2].value) {
        if (ele[1].value >= ele[2].value) {
            ele[3].value = ele[1].value;
        } else {
            ele[3].value = ele[2].value;
        }
    } else if (ele[1].value >= ele[0].value && ele[1].value >= ele[2].value) {
        if (ele[0].value >= ele[2].value) {
            ele[3].value = ele[0].value;
        } else {
            ele[3].value = ele[2].value;
        }
    }
0


    //else if(ele[0].value >= ele[1].value)
    //{
    //    ele[3].value = ele[0].value;
    //}
    //else
    //{
    //    ele[3].value = ele[1].value;
    //}
    else if (ele[2].value >= ele[0].value && ele[2].value >= ele[1].value) {
        if (ele[0].value >= ele[1].value) {
            ele[3].value = ele[0].value;
        } else {
            ele[3].value = ele[1].value;
        }
    }

}

var btn = document.getElementById("btn")
btn.addEventListener("click", secondMaximum);