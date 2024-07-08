const numberinput = document.getElementById("number");

const buttoninput = document.getElementById("convert-btn");

var result = document.getElementById("output");

function checkinput()
{
    if (numberinput.value.length == 0)
    {
        result.textContent = "Please enter a number";
    }

    else
    {
        result.textContent = "Hello";
    }
}

buttoninput.addEventListener("click", checkinput);