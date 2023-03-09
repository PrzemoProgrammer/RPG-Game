import inventoryWindowConfig from "../../../config/windows/inventoryWindowConfig"
import Item from "../../items/Item"
import Window from "../../windows/Window"
import HealthPotion from "../../items/HealthPotion"
import PinkSword from "../../items/PinkSword"
// import items from "../../items/"
import createItem from "../../items/Items"




class InventoryWindow extends Window {
    constructor(scene) {
        super(scene, inventoryWindowConfig)

        this.config = inventoryWindowConfig
        this.gold = this.config.gold.amound

        this.goldText = this.scene.add.text(this.windowSprite.x  + this.windowSprite.displayWidth -10, this.windowSprite.y + this.windowSprite.displayHeight - 27, this.gold + ' :Gold', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(1,0)
        this.windowContainer.add(this.goldText)

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

    isInventoryFull(){
        return this.items.length < this.slot.maxRows*this.slot.maxColumns
    }

    addItem(item){

        let _item = createItem(this.scene, item.config)
        
        this.items.push(_item)

        let index = this.items.map(object => object).indexOf(_item);

        let slot = this.inventorySlots[index]
        let x = slot.x + slot.width/2
        let y = slot.y + slot.height/2

        _item.x = x
        _item.y = y

        this.windowContainer.add(_item)
    }



    // addItem(item){

    //     let _item = null
        
    //     switch(item.config.type) {
    //         case "healthPotion" : _item = new HealthPotion(this.scene, item.config); break;
    //         case "pinkSword" : _item = new PinkSword(this.scene, item.config); break;
    //     }

    //     this.items.push(_item)

    //     let index = this.items.map(object => object).indexOf(_item);

    //     let slot = this.inventorySlots[index]
    //     let x = slot.x + slot.width/2
    //     let y = slot.y + slot.height/2

    //     _item.x = x
    //     _item.y = y

    //     this.windowContainer.add(_item)
    // }

    updateGold(item){
        this.gold -= item.cost
        this.goldText.text = this.gold + ' :Gold'
    }
}
export default InventoryWindow
