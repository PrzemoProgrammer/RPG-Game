import { PLAY_SCENE } from '../../../scenes/scenes'
import StatusBar from '../status/StatusBar'

class Status {
    constructor(scene, x, y, sprite, photo, background) {

        this.scene = scene
        this.x = x
        this.y = y
        this.sprite = sprite
        this.photo = photo
        this.background = background

        this.background = this.scene.add.image(this.x + 60, this.y + 40, this.background).setOrigin(0, 0)
        this.healthBar = new StatusBar(this.scene, this.x + 70, this.y + 42, PLAY_SCENE.SCENE.player.maxHealth , 'healthBar')
        this.manaBar = new StatusBar(this.scene, this.x + 70, this.y + 55, 300, 'manaBarHUD')
        this.photoSprite = this.scene.add.sprite(this.x + 5, this.y + 5, this.photo).setOrigin(0, 0)
        this.bannerSprite = this.scene.add.image(this.x, this.y, this.sprite).setOrigin(0, 0)

        this.photoSprite.play(this.photo, true)

                // let ourGame = this.scene.get('PlayScene');
    }
}
export default Status