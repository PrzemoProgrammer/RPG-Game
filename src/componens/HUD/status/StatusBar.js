class StatusBar {
    constructor(scene, x, y, maxBar, image) {
        this.scene = scene
        this.x = x
        this.y = y
        this.maxBar = maxBar
        this.image = image

        this.bar = this.maxBar

        this.energybar = this.scene.add.sprite(this.x, this.y, this.image).setOrigin(0, 0).setScale(2)
        this.energybar.displayWidth = 130
    }

    update(){
        this.energybar.displayWidth = this.getBarWidth();
    }

    getBarWidth(){
        let hpPercent = this.bar / this.maxBar;
        return this.energybar.displayWidth * hpPercent;
    }
}
export default StatusBar