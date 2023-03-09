import shopWindowConfig from "../../config/windows/shopWindowConfig";
import HealthPotion from "../items/HealthPotion";
import PinkSword from "../items/PinkSword";
import Window from "./Window";
import itemsConfig from "../../config/items/index";
import createItem from "../items/Items";
// import HealthPotionConfig from "../../config/items/HealthPotionConfig";
// import NPCsConfig from "../../config/NPC/index";



class ShopWindow extends Window {
    constructor(scene) {
        super(scene, shopWindowConfig)
     
        this.inventorySlots = []
        this.items = []

        this.slot = {
            maxRows: 5,
            maxColumns: 4,
            marginX: -12,
            marginY: 5,
            slotWeight: 53,
            slotHeight: 50,
            gridSpacing: 30
        }

        this.createItemSlots()
        this.createItems()
    }

    createItemSlots(){
        for(let i=0; i<this.slot.maxColumns; i++) {
            for(let j=0; j<this.slot.maxRows; j++){

                let x = this.windowSprite.x + this.slot.marginX + this.slot.slotWeight/2 + ( i* (this.slot.slotWeight/2 + this.slot.gridSpacing)) 
                let y = this.windowSprite.y + this.slot.marginY + this.slot.slotHeight/2 + ( j* (this.slot.slotHeight/2 + this.slot.gridSpacing)) 

                this.tileSlot = this.scene.add.sprite( x, y, 'inventory-slot').setOrigin(0, 0).setDepth(1000)
                this.inventorySlots.push(this.tileSlot)
                this.windowContainer.add(this.tileSlot)
            }
        }
    }

    createItems(){

        itemsConfig.forEach(itemConfig => { 

            let _item = createItem(this.scene, itemConfig)

            this.items.push(_item)

            let index = this.items.map(object => object).indexOf(_item);

            let slot = this.inventorySlots[index]
            let x = slot.x + slot.width/2
            let y = slot.y + slot.height/2

            _item.x = x
            _item.y = y

            _item.itemInformation.closeBoard()
            this.windowContainer.add(_item)
        })
      
    }


    // createItems(){

    //     itemsConfig.forEach(itemConfig => { 
    //         let _item = null
             
    //         switch(itemConfig.type) {
    //             case "healthPotion" : _item = new HealthPotion(this.scene, itemConfig); break;
    //             case "pinkSword" : _item = new PinkSword(this.scene, itemConfig); break;
    //         }
    //         this.items.push(_item)

    //         let index = this.items.map(object => object).indexOf(_item);

    //         let slot = this.inventorySlots[index]
    //         let x = slot.x + slot.width/2
    //         let y = slot.y + slot.height/2

    //         _item.x = x
    //         _item.y = y

    //         _item.itemInformation.closeBoard()
    //         this.windowContainer.add(_item)
    //     })
      
    // }
}
export default ShopWindow
