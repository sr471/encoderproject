
var textArea = document.getElementById('textArea');
var inputText = document.getElementById('inputText');

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
  textArea.textContent = "";
//  inputText.textContent = " ";

})

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


$("#inputText").keydown(function(e){
var userKey = e.keyCode;

if (userKey == 8){
   textArea.textContent = textArea.textContent.substr(0, textArea.textContent.length - 1);
}

else if($("input:checked").val() == "caesarCipher"){

  console.log("heloo");
// if caesar
  if(userKey + 1 == 91){
    textArea.textContent +="a";
  }

  else if(userKey == 32){
  textArea.textContent += letters[32];
  }
else {
      textArea.textContent += letters[userKey + 1];
  }
}


// if heiroglyphics

else{
  // if echo
  $("#textArea").append(letters[userKey]);
}


});

//event handler
