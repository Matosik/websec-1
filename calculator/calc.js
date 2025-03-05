function Calculator(num1,num2, operator)
{
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
        default:
            return "ххх";
    }
}

function OnClickHandler()
{
    const firstNumEl = document.getElementById("first_num");
    const secondNumEl = document.getElementById("second_num");
    const operatorEl = document.getElementById("operator");
    
    const firstNum = Number.parseFloat(firstNumEl.value);
    const operator = operatorEl.value;
    const secondNum = Number.parseFloat(secondNumEl.value);

    let answer = Calculator(firstNum, secondNum, operator);
    
    SetInfo(answer)
}

function SetInfo(answer){
    let ans = document.getElementById("answer");
    ans.innerHTML = answer
}