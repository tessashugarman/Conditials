var ele=document.querySelector(".box")

var num1 = Number(prompt("Write a number pls"));


if (!isNaN(num1)) {
    var num2 = Number(prompt("Hit me with another number pls"));
        if (!isNaN(num2)){
            var operator = prompt("Enter an operator pls (+,-,*,/)");
            if (operator === "+") {
                var result=num1+num2;
                ele.innerHTML=result;
            } else if (operator === "-") {
                var result=num1-num2;
                ele.innerHTML=result;
            } else if (operator === "*") {
                var result=num1*num2;
                ele.innerHTML=result;
            } else if (operator === "/") {
                var result=num1/num2;
                ele.innerHTML=result;
            } else{
                document.body.innerHTML = "That is not an operator. Try again."
            }
        }else{
            document.body.innerHTML="This is not a number. Try again."
        }

}else{
    document.body.innerHTML="This is not a number. Try again."
}


// var operator = prompt("Enter an operator pls (+,-,*,/)");
// if (operator === "+") {
//     var result=num1+num2;
//     ele.innerHTML=result;
// } else if (operator === "-") {
//     var result=num1-num2;
//     ele.innerHTML=result;
// } else if (operator === "*") {
//     var result=num1*num2;
//     ele.innerHTML=result;
// } else if (operator === "/") {
//     var result=num1/num2;
//     ele.innerHTML=result;
// } else{
//     document.body.innerHTML = "That is not an operator. Try again."
// }
