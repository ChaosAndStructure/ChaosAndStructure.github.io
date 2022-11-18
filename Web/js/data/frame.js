class Frame {
    /** @type {string} this is bg*/
    background 
    /** @type {string}*/
    leftChar
    /** @type {string}*/
    midChar
    /** @type {string}*/
    rightChar

    /** @type {string} */
    name
    /** @type {string} */
    text

    /** @type {string} */
    choiceText1
    /** @type {string} */
    choiceText2
    /** @type {string} */
    choiceText3
    /** @type {string} */
    choiceText4

    /** @type {int} */
    choiceScene1
    /** @type {int} */
    choiceScene2
    /** @type {int} */
    choiceScene3
    /** @type {int} */
    choiceScene4

    /** @type {Frame} */
    prevFrame
    /** @type {Frame} */
    nextFrame


    constructor (obj) {
        this.background = obj.background
        this.leftChar = obj.leftChar
        this.midChar = obj.midChar
        this.rightChar = obj.rightChar

        this.name = obj.name
        this.text = obj.text

        this.prevFrame = obj.prevFrame
        this.nextFrame = obj.nextFrame

        this.choiceText1 = obj.choiceText1
        this.choiceText2 = obj.choiceText2
        this.choiceText3 = obj.choiceText3
        this.choiceText4 = obj.choiceText4

        this.choiceScene1 = obj.choiceScene1
        this.choiceScene2 = obj.choiceScene2
        this.choiceScene3 = obj.choiceScene3
        this.choiceScene4 = obj.choiceScene4
    }
}