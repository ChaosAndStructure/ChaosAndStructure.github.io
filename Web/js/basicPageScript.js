function onCommand() {
    if (event.keyCode == 13)
      { 
        var input = document.getElementById("commandInsert").value;
        if(input == "back") {
            window.location.replace("index.html");
            document.getElementById("commandInsert").value = "";
        }

        else {
            document.getElementById("commandInsert").value = "";
        }
      } 
}