class SkillIcon {
    constructor(scene, x, y, image, time) {

        this.scene = scene
        this.x = x
        this.y = y
        this.image = image
        this.time = time

        this.isLoading = false

        this.icon = this.scene.add.image(this.x, this.y, this.image).setOrigin(0, 0)
        this.load = this.scene.add.image(this.x, this.y, 'load-skill-image').setOrigin(0, 0)

        this.loadHeight = this.load.displayHeight
        this.load.displayHeight = 0
    }

    update(){

    }

    startLoading(){
        if(this.isLoading) return

            this.isLoading = true
            this.load.displayHeight = this.loadHeight

            this.scene.tweens.add({
                targets: this.load,
                displayHeight: 0,
                duration: this.time,
                onComplete: ()=>  this.isLoading = false
            })
    }
}
export default SkillIcon