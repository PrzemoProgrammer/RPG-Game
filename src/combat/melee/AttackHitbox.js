class AttackHitbox {
    constructor(entity, {offsetY, w, h}){
        this.entity = entity
        this.offsetY = offsetY
        this.w = w
        this.h = h
     
        this.hitbox = this.entity.scene.add.rectangle(-1000, -1000, this.w, this.h, 0xffffff, 0).setOrigin(0.0)
        this.entity.scene.physics.add.existing(this.hitbox)
        this.entity.scene.physics.world.on('worldstep', ()=> this.entity.scene.physics.world.disable(this.hitbox))
    }

    resetPosition() {
        this.hitbox.setPosition(this.entity.character.flipX ? this.entity.characterContainer.body.x - this.w : this.entity.characterContainer.body.x + this.entity.characterContainer.body.width,
        this.entity.characterContainer.body.y + this.offsetY)
    }
}
export default AttackHitbox