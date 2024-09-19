
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const MenuClose = document.querySelector(".Menu-btn");
const Menu = document.getElementById("menu");
var isMenuOpen = false;

function toggleMenu(e)
{
    e.stopPropagation();
    isMenuOpen = !isMenuOpen;
    Menu.style.display = isMenuOpen ? "block" : "none";
}

function closemenu()
{
    if(isMenuOpen)
    {
        Menu.style.display = "none";
        isMenuOpen = false;
    }
}


function CheckInput()
{
    if (userInput.value.length == 0)
    {
        alert("Please provide a phone number");
    }

    const regex = /^1?\s?(\(?[0-9]{3}\)?)[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
    result.innerHTML = regex.test(userInput.value);
    if(result.innerHTML == true)
    {
        result.classList.remove("hidden");
        return `Valid US number: ${userInput.value}`;
    }
    else
    {
        result.classList.remove("hidden");
        return `Invalid US number: ${userInput.value}`;
    }
    //result.classList.remove("hidden");
}

/*
function showResults()
{

}
*/

MenuClose.addEventListener("click", toggleMenu);
document.addEventListener("click", closemenu);
Menu.addEventListener("click", (e) => {e.stopPropagation();});
checkBtn.addEventListener("click", CheckInput);