function onCommand() {
    if (event.keyCode == 13)
      { 
        var input = document.getElementById("commandInsert").value;
        if(input == "?") {
            document.getElementById("wrapperCommands").style.visibility = "visible";
            document.getElementById("commandInsert").value = "";
        }

        if(input == "Contact.txt") {
            window.location.replace("contact.html");
            document.getElementById("commandInsert").value = "";
        }

        if(input == "Game.exe") {
            window.location.replace("game.html");
            document.getElementById("commandInsert").value = "";
        }

        if(input == "Credits.mp4") {
            window.location.replace("credits.html");
            document.getElementById("commandInsert").value = "";
        }

        if(input == "Updates.log") {
            window.location.replace("updates.html");
            document.getElementById("commandInsert").value = "";
        }

        if(input == "clear") {
            document.getElementById("wrapperCommands").style.visibility = "hidden";
            document.getElementById("commandInsert").value = "";
        }

        else {
            document.getElementById("commandInsert").value = "";
        }
      } 
}

function startUp() {
    setTimeout(function() {
        document.getElementById("title").style.visibility = "visible";
    }, 700);

    setTimeout(function() {
        document.getElementById("titleSubText").style.visibility = "visible";
    }, 1700);

    setTimeout(function() {
        document.getElementById("hr").style.visibility = "visible";
    }, 2700);

    setTimeout(function() {
        document.getElementById("copyright").style.visibility = "visible";
    }, 3700);

    setTimeout(function() {
        document.getElementById("userInput").style.visibility = "visible";
    }, 4700);

    setTimeout(function() {
        document.getElementById("introText").style.visibility = "visible";
    }, 5700);
}

  