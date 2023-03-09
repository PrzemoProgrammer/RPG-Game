import HealthBar from '../componens/HealthBar'

class Entity {
    constructor(scene, config) {
        
        this.scene = scene
        this.config = config

        this.setXYPosition();
        
        this.sprite = config.sprite 
        this.nick = config.name
        this.maxHealth = config.hp
        this.type = config.type
        this.speed = config.speed
        
        this.canMove = true

        this.character = this.scene.add.sprite(-256, -160, this.sprite).setOrigin(0, 0).setScale(2)
        this.healthBar = new HealthBar(this.scene, this.x, this.y, this.maxHealth)
        this.nickname = this.scene.add.text(this.character.displayWidth/2 - 256, -40, this.nick, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0.5,0)

        this.characterContainer = scene.add.container(this.x, this.y, [this.character, this.healthBar.energybar, this.healthBar.healthBarContainer, this.nickname])
        this.scene.physics.world.enableBody(this.characterContainer);
        this.characterContainer.body.height = 95
        this.characterContainer.body.setCollideWorldBounds(true)
        this.character.play(this.sprite, true)
    }

    setXYPosition(){
        if(typeof this.config.x === "object") {
            this.x = Phaser.Math.Between(this.config.x.min, this.config.x.max)
        } else {
            this.x = this.config.x
        }
        if(typeof this.config.y === "object") {
            this.y = Phaser.Math.Between(this.config.y.min, this.config.y.max)
        } else {
            this.y = this.config.y
        }
    }
}
export default Entity

