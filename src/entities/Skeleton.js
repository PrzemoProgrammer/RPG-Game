import Enemy from './Enemy'

class Skeleton extends Enemy {
    constructor(scene, config) {
        super(scene, config)

        this.state = {
            idle: 'skeleton-idle',
            walkRight: 'skeleton-walk-right',
            takeHit: 'skeleton-take-hit',
            death: 'skeleton-death',
            attack: 'skeleton-attack'
        }
        
        this.createSwordHitBox()
    }
}
export default Skeleton