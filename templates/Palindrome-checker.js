const textinput = document.getElementById("text-input");

const btninput = document.getElementById("check-btn");

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

function check()
{
  
  if (textinput.value.length == 0)
  {
    alert("Field cannot be empty!");
    return false;
  }
  else
  {
    return showresults();
  }
}

btninput.addEventListener("click", check);

function palindrome(textinput)
{
    var remove = textinput.trim().replace(/[^A-Za-z0-9]/g, '').toLowerCase(); 
    var textsplit = remove.split("");

    var reversesplit = textsplit.reverse();

    var joinreverse = reversesplit.join("");

    if(remove === joinreverse)
    {
        return `${textinput} is a Palindrome`;
        //alert("Palindrome");
    }

    else
    {
        return `${textinput} is not a Palindrome`;
        //alert("Not a Palindrome");
    }
}


function showresults()
{
    var result = document.getElementById("result")
    result.innerHTML = palindrome(textinput.value);
}

