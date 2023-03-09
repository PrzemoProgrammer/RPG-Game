import Enemy from './Enemy'

class FlyingEye extends Enemy {
    constructor(scene, config) {
        super(scene, config)

        this.characterContainer.body.height = 60

        this.state = {
            idle: 'flyingEye-idle',
            walkRight: 'flyingEye-idle',
            takeHit: 'flyingEye-take-hit',
            death: 'flyingEye-death',
            attack: 'flyingEye-attack'
        }

        this.swordBounds = {
            offsetY: + 20,
            w: 25,
            h: 45
        }

        this.createSwordHitBox(this.swordBounds)
    }
}
export default FlyingEye