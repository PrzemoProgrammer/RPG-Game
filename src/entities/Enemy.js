import Entity from './Entity'
import AttackHitbox from '../combat/melee/AttackHitbox'

class Enemy extends Entity {
    constructor(scene, config) {
        super(scene, config)

        this.config = config
        this.swordHitPower = config.swordDamage

        this.x = Phaser.Math.Between(config.x.min, config.x.max)
        this.y = Phaser.Math.Between(config.y.min, config.y.max)

        this.canAttack = true
        this.canMove = true
        this.respawnTime = config.respawnTime
        this.changeDirectionTime = 5000

        this.frameIndexAnimAttack = 7
        this.randomNumber = Phaser.Math.Between(0, 4)

        this.state = {}

        this.defaultSwordBounds = {
            offsetY: -15,
            w: 100,
            h: 90
        }
     
        this.init()
    }

    createSwordHitBox(config = this.defaultSwordBounds) {
        this.swordHitbox = new AttackHitbox(
            this, 
            config
        )
    }

    init(){
        this.triggerTimer()
    }

    update(){
        // this.move()
    }

    move() {
        if(!this.isDead()) this.characterContainer.body.setVelocity(0)

        if(this.canMove) {
            if(this.randomNumber === 0) 
                this.moveLeft()
            
            if (this.randomNumber === 1)
                this.moveRight()
            
            if(this.randomNumber === 2)
                this.moveDown()
        
            if(this.randomNumber === 3)
                this.moveUp()
        
            if (this.randomNumber === 4)
                this.setIdle()
        }
    }

    setSwordAttack(){
        if(this.isDead()) return
        this.canMove = false, 
        this.swordHitbox.resetPosition();
        this.characterContainer.body.setVelocity(0),
        this.character.play(this.state.attack, true)
            .on('animationupdate', (anim, frame) => {   
                    if (frame.index === this.frameIndexAnimAttack){
                        this.scene.physics.world.enable(this.swordHitbox.hitbox)
                        this.character.off('animationupdate')
                }})
            .once("animationcomplete",()=>{
                this.canMove = true
                this.character.play(this.state.idle, true) 
                this.scene.physics.world.disable(this.swordHitbox.hitbox)
            })
    }

    isDead(){
        return this.healthBar.health <= 0
    }

    kill(){
        this.canMove = false
        this.canAttack = false
        this.character.play(this.state.death, true).once("animationcomplete",()=>{
            this.character.anims.stop()
        }) 
        this.characterContainer.remove(this.character)
       this.characterContainer.destroy()
       this.character.setPosition(this.characterContainer.x + this.character.x, this.characterContainer.y + this.character.y,)
       this.scene.add.existing(this.character); // ? show dead sprite
        // this.scene.time.delayedCall(this.respawnTime, () =>  this.character.destroy(), null, this)
    }

    setTakeDamage(damage){
        if(this.isDead()) return

        this.canMove = false
        this.attacked(damage)
        this.healthBar.update();
        this.character.play(this.state.takeHit, true)
        .once("animationcomplete",()=>{
            this.character.play(this.state.idle, true)
            this.canMove = true
        })
        if(this.isDead()) this.character.once("animationcomplete",()=>{
            this.kill()
       }) 
    }

    moveLeft(){
        this.character.flipX = true
        this.characterContainer.body.setVelocityX(-this.speed)
        this.character.play(this.state.walkRight, true)
    }

    moveRight(){
        this.character.flipX = false
        this.characterContainer.body.setVelocityX(this.speed)
        this.character.play(this.state.walkRight, true);
    }

    moveDown(){
        this.characterContainer.body.setVelocityY(-this.speed)
        this.character.play(this.state.walkRight, true);
    }

    moveUp(){
        this.characterContainer.body.setVelocityY(this.speed)
        this.character.play(this.state.walkRight, true);
    }

    setIdle(){
        this.character.play(this.state.idle, true);
        this.characterContainer.body.setVelocity(0)
    }


    setPositionSwordHitbox(){
        this.swordHitbox.hitbox.x = this.character.flipX ? this.characterContainer.body.x -100 : this.characterContainer.body.x + this.characterContainer.body.width
        this.swordHitbox.hitbox.y = this.characterContainer.body.y -15
    }

    attacked(damage) {
        this.healthBar.health -= damage;
        this.healthBar.getHealBarWidth()
    }

    triggerTimer(){
        this.scene.time.addEvent({
            callback: () => this.randomNumber = Phaser.Math.Between(0, 4),
            callbackScope: this,
            delay: this.changeDirectionTime, 
            loop: true
        });
    }
}
export default Enemy