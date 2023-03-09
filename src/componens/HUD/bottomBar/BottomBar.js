import SkillIcon from "./SkillIcon"

class BottomBar {
    constructor(scene, x, y, sprite) {

        this.scene = scene
        this.x = x
        this.y = y
        this.sprite = sprite

        this.sprite = this.scene.add.sprite(this.x, this.y, this.sprite).setOrigin(0, 0)
        this.fallingRockIcon = new SkillIcon(this.scene, this.x +10, this.y +10, "falling-rock-icon", 5000)
        this.freezeSpinIcon = new SkillIcon(this.scene, this.x +70, this.y +10, "freeze-spin-icon", 5000)

        this.skills = {
            freezeSpin:this.freezeSpinIcon,
            fallingRock:this.fallingRockIcon
        }
    }
}

export default BottomBar