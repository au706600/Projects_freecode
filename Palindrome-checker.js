const textinput = document.getElementById("text-input");

const btninput = document.getElementById("check-btn");

function check()
{
  
  if (textinput.value.length == 0)
  {
    alert("Enter text");
    return false;
  }
  else
  {
    return palindrome(textinput.value, btninput);
  }
}

btninput.addEventListener("click", check);

function palindrome(textinput, btninput)
{
  if(btninput)
  {
    var textsplit = textinput.split("");

    var reversesplit = textsplit.reverse();

    var joinreverse = reversesplit.join("");

    return textinput == joinreverse; 
    
  }
}