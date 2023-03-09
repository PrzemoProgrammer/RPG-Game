import HealthPotion from "./HealthPotion";
import PinkSword from "./PinkSword";

export default function createItem(scene, config){

    // itemsConfig.forEach(itemConfig => { 

    // })
    let _item = null
    
    switch(config.type) {
        case "healthPotion" : _item = new HealthPotion(scene, config); break;
        case "pinkSword" : _item = new PinkSword(scene, config); break;
    }
    return _item
}
