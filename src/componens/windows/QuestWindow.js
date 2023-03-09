import questWindowConfig from "../../config/windows/questWindowConfig";
import Window from "./Window";
// import NPCsConfig from "../../config/NPC/index";

class QuestWindow extends Window {
    constructor(scene) {
        super(scene, questWindowConfig)

        this.backgorund = this.scene.add.sprite(this.windowSprite.x +5, this.windowSprite.y +25, 'blankBackgroundWindow').setOrigin(0, 0)

        this.windowContainer.add(this.backgorund);
    }
}
export default QuestWindow