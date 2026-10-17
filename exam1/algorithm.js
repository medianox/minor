function verify() {
    console.log("!!!a")
    let a = parseInt(elementA.value);
    console.log(a)
    let x

    if (a > 100) {
        x = 0
    }
    else if (a < 61) {
        x = a
    }
    else {
        x = a ** 4
    }
    console.log(x)

    document.getElementById('result').value="x = "+x;
}

const elementA = document.getElementById("a");
const elementVerify = document.getElementById("verify");
const elementSend = document.getElementById("send");
const elementForm = document.getElementById("UserEnter");

elementVerify.addEventListener('click', verify);
elementSend.addEventListener('click', function() {
    verify();
    elementForm.submit();
});
