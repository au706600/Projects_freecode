
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
    const regex = /^1?\s?(\([0-9]{3}\)|[0-9]{3})[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;

    if (userInput.value.length == 0)
    {
        alert("Please provide a phone number");
    }
    //result.innerHTML = regex.test(userInput.value);
    else if(regex.test(userInput.value))
    {
        result.classList.remove("hidden");
        result.innerHTML = `Valid US number: ${userInput.value}`;
    }
    else
    {
        result.classList.remove("hidden"); 
        result.innerHTML = `Invalid US number: ${userInput.value}`;
    }
    //result.classList.remove("hidden");
}




MenuClose.addEventListener("click", toggleMenu);
document.addEventListener("click", closemenu);
Menu.addEventListener("click", (e) => {e.stopPropagation();});
checkBtn.addEventListener("click", CheckInput);
clearBtn.addEventListener("click",() => {
    userInput.value = "";
    result.innerHTML = "";
});