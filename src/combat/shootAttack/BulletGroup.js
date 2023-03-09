export class BulletGroup extends Phaser.Physics.Arcade.Group {
    constructor(character, sprite, speed){
        super(character.scene.physics.world, character.scene);

        this.character = character
        this.sprite = sprite
        this.speed = speed
        this.characterWidth = character.characterContainer.body.width

        this.isFlip = character.character

        this.createMultiple({
            classType: Bullet,
            frameQuantity: 5,
            active: false,
            visible: false,
            key: this.sprite
        })
    }

    shoot(x, y){
        const bullet = this.getFirstDead(false) 

        if(bullet) {

            if(this.character.isFlipX()) {
                bullet.fire(x - this.characterWidth, y);
                bullet.flipX = true
                bullet.setVelocityX(-this.speed)
            }
            else {
                bullet.fire(x, y);
                bullet.flipX = false
                bullet.setVelocityX(this.speed)
            }
        }
    }
}

export class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, sprite){
        super(scene, x, y, sprite)
        
        this.scene = scene
        this.sprite = sprite
    }

    deactivate(){
        this.setActive(false)
        this.setVisible(false)
    }

    isColliding(value){
        return value
    }

    fire(x, y){
        this.body.enable = true
        this.body.reset(x, y)

        this.setActive(true)
        this.setVisible(true)

        this.startX = this.x
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta) 

            if (this.x > this.startX + this.scene.gw/2 || this.x < this.startX - this.scene.gw/2 - 50) {
                this.setActive(false)
                this.setVisible(false)
                this.body.enable = false
            }

    }
}
