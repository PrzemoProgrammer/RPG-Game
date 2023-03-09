// import { WINDOW_SCENE } from '../scenes/scenes'
// import QuestWindow from '../componens/windows/QuestWindow'
// import ShopWindow from '../componens/windows/ShopWindow'
import Entity from './Entity'


class NPC extends Entity {
    constructor(scene, config) {
        super(scene, config)

        if(config.offsetCharacter) {
            const offset = config.offsetCharacter

            if(offset.x) this.character.x = offset.x
            if(offset.y) this.character.y = offset.y
        }
       
        if(config.containerBody){
            const body = config.containerBody

            if(body.w) this.characterContainer.body.width = body.w
            if(body.h) this.characterContainer.body.height = body.h
        }
           
        if(!config.hp){
            this.healthBar.healthBarContainer.visible = false
            this.healthBar.energybar.visible = false
        }
    }

    distance(target){
        // const distance = Phaser.Math.Distance.BetweenPoints(this.characterContainer.body, target.characterContainer.body);

        // if(distance > 200) {
        //     this.window.canOpen = true
        // }
    }

    update(target){
        // this.distance(target)
    }
}
export default NPC