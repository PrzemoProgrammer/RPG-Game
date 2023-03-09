import Enemy from './Enemy'

class Mushroom extends Enemy {
    constructor(scene, config) {
        super(scene, config)

        this.characterContainer.body.height = 75

        this.state = {
            idle: 'mushroom-idle',
            walkRight: 'mushroom-walk-right',
            takeHit: 'mushroom-take-hit',
            death: 'mushroom-death',
            attack: 'mushroom-attack'
        }

        this.swordBounds = {
            offsetY: -5,
            w: 60,
            h: 80
        }

        this.createSwordHitBox(this.swordBounds)
    }
}
export default Mushroom