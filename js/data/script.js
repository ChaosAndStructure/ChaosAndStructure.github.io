// Jaylo
let jayloDropFlag = "js/data/art/Jaylo_slash_art.png"
let jayloBanana = "js/data/art/BananaJaylo.png"

// Mistress
let mistressBanana = "js/data/art/BananaMistress.png"

// backgrounds
hawks = "js/data/art/tempBack.jpg"

// The Actual Script
let script = {

    // THIS IS WHERE THE SCENES GET MADE FOR THE GAME

    scenes: [
        {
            frames: [
                {
                    background: hawks,
                    leftChar: jayloDropFlag,
                    midChar: "",
                    rightChar: "",

                    name: "Jaylo",
                    text: "I'm gonna press that button!",

                    choiceText1: "Do it!",
                    choiceText2: "Don't you idiot!",
                    choiceText3: "",
                    choiceText4: "",

                    choiceScene1: 1,
                    choiceScene2: 2,
                    choiceScene3: "",
                    choiceScene4: "",
                },
            ],  
        },

        {
            frames: [
                {
                    background: hawks,
                    leftChar: jayloDropFlag,
                    midChar: "",
                    rightChar: "",

                    name: "Narration",
                    text: "*Click*",

                    choiceText1: "",
                    choiceText2: "",
                    choiceText3: "",
                    choiceText3: "",

                    choiceScene1: "",
                    choiceScene2: "",
                    choiceScene3: "",
                    choiceScene4: "",
                },

                {
                    background: hawks,
                    leftChar: jayloBanana,
                    midChar: "",
                    rightChar: "",

                    name: "Jaylo",
                    text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",

                    choiceText1: "",
                    choiceText2: "",
                    choiceText3: "",
                    choiceText3: "",

                    choiceScene1: "",
                    choiceScene2: "",
                    choiceScene3: "",
                    choiceScene4: "",
                },

                {
                    background: hawks,
                    leftChar: jayloBanana,
                    midChar: "",
                    rightChar: mistressBanana,

                    name: "Mistress",
                    text: "WHY ARE WE BANANA'S?!?!?!",

                    choiceText1: "",
                    choiceText2: "",
                    choiceText3: "",
                    choiceText3: "",

                    choiceScene1: "",
                    choiceScene2: "",
                    choiceScene3: "",
                    choiceScene4: "",
                },
                

                {
                    background: hawks,
                    leftChar: jayloBanana,
                    midChar: "",
                    rightChar: mistressBanana,

                    name: "Djesso",
                    text: "Haha, losers.",

                    choiceText1: "",
                    choiceText2: "",
                    choiceText3: "",
                    choiceText3: "",

                    choiceScene1: "",
                    choiceScene2: "",
                    choiceScene3: "",
                    choiceScene4: "",
                },

                {
                    background: hawks,
                    leftChar: "",
                    midChar: "",
                    rightChar: mistressBanana,

                    name: "Mistress",
                    text: "...what just happened...",

                    choiceText1: "",
                    choiceText2: "",
                    choiceText3: "",
                    choiceText3: "",

                    choiceScene1: "",
                    choiceScene2: "",
                    choiceScene3: "",
                    choiceScene4: "",
                },

                {
                    background: hawks,
                    leftChar: "",
                    midChar: "",
                    rightChar: "",

                    name: "Narration",
                    text: "- The Banana Ending",

                    choiceText1: "",
                    choiceText2: "",
                    choiceText3: "",
                    choiceText3: "",

                    choiceScene1: "",
                    choiceScene2: "",
                    choiceScene3: "",
                    choiceScene4: "",
                },
            ]
        },
        
        {
            frames: [
                {
                    background: hawks,
                    leftChar: "",
                    midChar: jayloDropFlag,
                    rightChar: "",

                    name: "Jaylo",
                    text: "Oh, fair enough then",

                    choiceText1: "",
                    choiceText2: "",
                    choiceText3: "",
                    choiceText3: "",

                    choiceScene1: "",
                    choiceScene2: "",
                    choiceScene3: "",
                    choiceScene4: "",
                },

                {
                    background: hawks,
                    leftChar: "",
                    midChar: "",
                    rightChar: "",

                    name: "Narration",
                    text: "- The Good Ending",

                    choiceText1: "",
                    choiceText2: "",
                    choiceText3: "",
                    choiceText3: "",

                    choiceScene1: "",
                    choiceScene2: "",
                    choiceScene3: "",
                    choiceScene4: "",
                },
            ]
        },
    ],
}