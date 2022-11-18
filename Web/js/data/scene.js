class Scene {
    /** @type {[Frame]} */
    frames = [] // DEFINE FRAMES ARRAY

    currentFrame = 0; // STARTING COUNT FOR CURRENTFRAME

    // GO TO PREVUIS FRAME
    prevFrame() {
        this.currentFrame-- // SUBTRACT 1 FROM CURRENTFRAME COUNT
        console.log(this.currentFrame) // LOG WHAT SCENE WE'RE AT
    }

    nextFrame() {
        this.currentFrame++
        console.log(this.currentFrame)
    }

    // ...contructor I guess...
    constructor () {

    }

    // CREATE NEW SCENE IN OBJ
    static loadScene (obj) {
        let newScene = new Scene()
        for (const frame of obj.frames) {
            newScene.frames.push(new Frame(frame)) //PUSH THE NEW FRAME
        }
        return newScene
    }
}