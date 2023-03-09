class FreezeSpinHitbox {
    constructor(entity, {offsetX, offsetY, w, h}){
       
        this.entity = entity
        this.offsetX = offsetX
        this.offsetY = offsetY
        this.w = w
        this.h = h

        this.hitbox = this.entity.scene.add.rectangle(-1000, -1000, this.w, this.h, 0xffffff, 0).setOrigin(0.0)
        this.entity.scene.physics.add.existing(this.hitbox)
        this.entity.scene.physics.world.on('worldstep', ()=> this.entity.scene.physics.world.disable(this.hitbox))
    }

    resetPosition() {
        this.hitbox.setPosition( this.entity.characterContainer.body.x - this.offsetX,
        this.entity.characterContainer.body.y - this.offsetY)
    }
}
export default FreezeSpinHitbox