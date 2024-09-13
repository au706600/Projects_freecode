const numberinput = document.getElementById("number");

const buttoninput = document.getElementById("convert-btn");

var result = document.getElementById("output");

const menuOpen = document.getElementById("Menu-Open");
const closeMenu = document.querySelector(".Button");
const menu = document.getElementById("menu");
var isMenuOpen = false;

function toggleMenu(e)
{
    e.stopPropagation();
    isMenuOpen = !isMenuOpen;
    menu.style.display = isMenuOpen ? "block" : "none";
}

function OpenMenu()
{
    if(!isMenuOpen)
    {
        menu.style.display = "block";
        isMenuOpen = true;
    }
}

function hidMenu()
{
    if(isMenuOpen)
    {
        menu.style.display = "none";
        isMenuOpen = false;
    }
}

closeMenu.addEventListener("click", toggleMenu);
document.addEventListener("click", hidMenu);
menu.addEventListener("click", (e) => {e.stopPropagation();});
menuOpen.addEventListener("click", toggleMenu);
document.addEventListener("click", OpenMenu);

function checkinput()
{
    if (numberinput.value.length == 0)
    {
        result.textContent = "Please enter a valid number";
        result.classList.remove("hidden");
    }

    else if(numberinput.value < 1)
    {
        result.textContent = "Please enter a number greater than or equal to 1";
        result.classList.remove("hidden");
    }

    else if(numberinput.value > 3999)
    {
        result.textContent = "Please enter a number less than or equal to 3999";
        result.classList.remove("hidden");
    }

    else
    {
        showresults();
    }
}

buttoninput.addEventListener("click", checkinput);

function numToRoman(numberinput)
{
    var str = '';

    var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    var number = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

    for(var i = 0; i < number.length; i++)
    {
        while(numberinput >= number[i])
        {
            str += roman[i];
            numberinput -= number[i];
        }
    }

    return str;

}

function showresults()
{
    result.innerHTML = numToRoman(numberinput.value);
    result.classList.remove("hidden");
}