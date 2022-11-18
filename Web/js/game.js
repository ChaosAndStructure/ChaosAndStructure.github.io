/** @type {[Scene]} */
// MAKE SCENES HERE
let scenes = [];
let currentScene = 0;

// LOAD THE SCRIPT
function loadScript() {
    for (const scene of script.scenes) {
        scenes.push(Scene.loadScene(scene))
    }
}

function setFrame() {
    
    console.log(scenes)
    // VARIABLES FROM SCRIPT
    let leftChar = scenes[currentScene].frames[scenes[currentScene].currentFrame].leftChar;
    let rightChar = scenes[currentScene].frames[scenes[currentScene].currentFrame].rightChar;
    let midChar = scenes[currentScene].frames[scenes[currentScene].currentFrame].midChar;
    let nameChar = scenes[currentScene].frames[scenes[currentScene].currentFrame].name;
    let dialoge = scenes[currentScene].frames[scenes[currentScene].currentFrame].text;
    let background = scenes[currentScene].frames[scenes[currentScene].currentFrame].background;

    // get all the choice's their text for the button
    let choiceText1 = scenes[currentScene].frames[scenes[currentScene].currentFrame].choiceText1
    let choiceText2 = scenes[currentScene].frames[scenes[currentScene].currentFrame].choiceText2
    let choiceText3 = scenes[currentScene].frames[scenes[currentScene].currentFrame].choiceText3
    let choiceText4 = scenes[currentScene].frames[scenes[currentScene].currentFrame].choiceText4

    let currentFrameNum = scenes[currentScene].currentFrame + 1;

    if (choiceText1 != "" ) {
        document.getElementById('choiceBox').style.display = 'block'
    }

    else {
        document.getElementById('choiceBox').style.display = 'none'
    }

    

    // EDIT THE HTML TO FIT THE SCRIPT'S FRAMES
    document.getElementById("leftCharImg").setAttribute("src", leftChar)
    document.getElementById("rightCharImg").setAttribute("src", rightChar)
    document.getElementById("nameChar").innerText = nameChar
    document.getElementById("textHolder").innerText = dialoge
    document.getElementById('body').style.backgroundImage = ("url(" + background + ")")
    document.getElementById('midCharImg').setAttribute("src", midChar)
    document.getElementById('pageNum').innerText = currentFrameNum

    document.getElementById('button1').innerText = choiceText1
    document.getElementById('button2').innerText = choiceText2
    document.getElementById('button3').innerText = choiceText3
    document.getElementById('button4').innerText = choiceText4
}

function continueFunc() {
    // CHECK IF ENTER IS PRESSED
    if (event.keyCode == 32) {
        // TRY SETTING NEXT FRAME
        try {
            scenes[currentScene].nextFrame()
            setFrame()
            // IF WE INCOUNTER AN ERROR SWITCH BACK A SCENE SO THAT THE COUNT
            // DOESN'T KEEP GOING UP
           } catch(error) {
            scenes[currentScene].prevFrame()
           }
}
}

function backFunc() {
    // CHECK IF 'b' IS PRESSED AND IF THE CURRENT FRAME
    //  ISN'T UNDEFINED AND IF THE FRAME COUNT ISN'T LOWER THAN currentScene
    if (event.keyCode == 66 && scenes[currentScene].frames[scenes[currentScene].currentFrame] != undefined && scenes[currentScene].currentFrame > currentScene) {
        scenes[currentScene].prevFrame() // MAKE SCENES GO BACK A FRAME
        setFrame() // ACTUALLY SET THE FRAME
    }
}

loadScript()
setFrame()

// pass the id of the button with function
function chosenOption(id) {

    // get choiceScene
    let choiceScene1 = scenes[currentScene].frames[scenes[currentScene].currentFrame].choiceScene1
    let choiceScene2 = scenes[currentScene].frames[scenes[currentScene].currentFrame].choiceScene2
    let choiceScene3 = scenes[currentScene].frames[scenes[currentScene].currentFrame].choiceScene3
    let choiceScene4 = scenes[currentScene].frames[scenes[currentScene].currentFrame].choiceScene4

    // if statements for each scene to switch to deppending on what button is pressed
    if(id == "button1") {
        currentScene = choiceScene1
        setFrame() 
    }

    if(id == "button2") {
        currentScene = choiceScene2
        setFrame()
    }

    if(id == "button3") {
        currentScene = choiceScene3
        setFrame()
    }

    if(id == "button4") {
        currentScene = choiceScene4
        setFrame()
    }
}