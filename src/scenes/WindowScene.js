import Phaser from 'phaser';
import { WINDOW_SCENE } from './scenes'
import InventoryWindow from '../componens/HUD/inventory/InventoryWindow';
import QuestWindow from '../componens/windows/QuestWindow';
import ShopWindow from '../componens/windows/ShopWindow';
import NPCsConfig from "../config/NPC/index";
import InformationBoard from '../componens/InformationBoard';
import buyErrorConfig from '../config/annoucements/buyErrorConfig';


class WindowScene extends Phaser.Scene {

    constructor() {
        super('WindowScene');
      }

      create(){
        WINDOW_SCENE.setScene(this)

        this.windows = []

        this.initCreateNPCWindows()

        this.inventoryWindow = new InventoryWindow(this) 
        this.inventoryWindow.moveable()
        this.inventoryWindow.closeWindow()
        this.enableBuyItems()

        this.notEnoughMoneyText = new InformationBoard(this, buyErrorConfig )
        this.notEnoughMoneyText.closeBoard()
      }


      initCreateNPCWindows() {
        NPCsConfig.forEach(NPCConfig => { 
          this.createNPCWindows(NPCConfig)
        })
      }

      createNPCWindows(NPCConfig){
        let window = null;
      
        switch(NPCConfig.windowType) {
          case  "SHOP": window = new ShopWindow(this); break;
          case  "QUEST": window = new QuestWindow(this); break;
        }

        window.moveable()
        this.addNPCWindow(window)
        this.closeWindow(window)
      }
      
      addNPCWindow(window){
        this.windows.unshift(window)
      }

      closeWindow(window){
        window.closeWindow()
      }

      openWindow(type){
        this.windows.forEach( window => {
          if(window.config.type === type){
            window.openWindow()
          }
        })
      }

      enableBuyItems(){
        this.windows[0].items.forEach( item => item.on("pointerdown", ()=> {
          if(item.cost <= this.inventoryWindow.gold) {
            this.inventoryWindow.updateGold(item)
            this.inventoryWindow.addItem(item)
          }
          else {
            this.notEnoughMoneyText.openBoard()
            this.time.delayedCall(3000, () => {
              this.notEnoughMoneyText.closeBoard()
            })  
          }
        }))
      }

      update() {

      }
}
    
export default WindowScene

