
//Variables
var textArea = document.getElementById('textArea');
var inputText = document.getElementById('inputText');
var translationArea = document.getElementById('translationArea');
var translationInputText = document.getElementById('translationInputText');

//Checks if a radio button is clicked and clears all text content
$("input[type='radio']").click(function(){
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
  textArea.textContent = "";
  inputText.value = "";
  translationArea.textContent = "";
  translationInputText.value = "";
})

//Conversion table
var letters =  {
65: "a",
66: "b",
67: "c",
68: "d",
69: "e",
70: "f",
71: "g",
72: "h",
73: "i",
74: "j",
75: "k",
76: "l",
77: "m",
78: "n",
79: "o",
80: "p",
81: "q",
82: "r",
83: "s",
84: "t",
85: "u",
86: "v",
87: "w",
88: "x",
89: "y",
90: "z",
32: " "
}

//this function is run if a key is pressed in the input text Area
$("#inputText").keydown(function(e){
var userKey = e.keyCode;// the keyCode is put into the variable userKey

if (userKey == 8){
   textArea.textContent = textArea.textContent.substr(0, textArea.textContent.length - 1);
}// if the userkey is backspace use a substring to delete the last letter in the text area


else if($("input:checked").val() == "caesarCipher"){

  // if caesar
    if(userKey + 1 == 91){
        textArea.textContent +="a";
      }//if the letter is z coverrt to a

      else if(userKey == 32){
      textArea.textContent += letters[32];
    }//if space button dont add anything to it

    else {
          textArea.textContent += letters[userKey + 1];
      }//letters are converted to the next letter

    }


else if($("input:checked").val() == "heiroglyphics"){
    // if heiroglyphics
    if(userKey == 32){
      textArea.textContent += letters[32];
    }
      else{
        $("#textArea").append("<img src='images/heiroglyphics/" + letters[userKey] + ".gif'>");
      }//gets the image for the letter by using the image tag
    }


else{
  // if echo
  $("#textArea").append(letters[userKey]);
}


});





$("#translationInputText").keydown(function(e){
var userKey = e.keyCode;

if (userKey == 8){
   translationArea.textContent = translationArea.textContent.substr(0, translationArea.textContent.length - 1);
}//if backspace, delete the last letter

else if(userKey == 13 && $("input:checked").val() == "caesarCipher")
{// if enter key is pressed
    var currentArray = translationInputText.value.split("");
    translationArea.textContent = "";
    for(var i = 0; i < currentArray.length; i++)
    {
      if(currentArray[i] == " ")
      {
        translationArea.textContent += " ";
      }
      else
      {
        var currentLetter = currentArray[i].toUpperCase();
        currentLetter = currentLetter.charCodeAt();
        translationArea.textContent += letters[currentLetter - 1];
      }
      }
}


else if($("input:checked").val() == "caesarCipher"){

  // if caesar
    if(userKey == 65){
        translationArea.textContent += "z";
      }

      else if(userKey == 32){
      translationArea.textContent += letters[32];
      }
    else {
          translationArea.textContent += letters[userKey - 1];
      }//decodes the caesar cipher so -1
    }


else{
  // if echo
  $("#translationArea").append(letters[userKey]);
}


});
