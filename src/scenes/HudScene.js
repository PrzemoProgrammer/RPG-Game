import Phaser from 'phaser';
import Button from "../componens/Button";
import Status from "../componens/HUD/status/Status"
import BottomBar from "../componens/HUD/bottomBar/BottomBar"
import { HUD_SCENE } from './scenes'
import { WINDOW_SCENE } from './scenes';

class HudScene extends Phaser.Scene {

    constructor() {
        super('HudScene');
      }

      create(){
        HUD_SCENE.setScene(this)

        this.scene = this
      
        this.bottomBar = new BottomBar(this, 230, 530, 'skillsBannerHUD')
        this.status = new Status(this, 10, 10, 'profileHUD', 'profilePhotoHUD', 'profileBackgroundHUD')
        this.inventoryButton = new Button(this, 730, 535, 'inventoryButtonHUD')
        .onClick(()=>{
          WINDOW_SCENE.SCENE.inventoryWindow.isOpen() ? WINDOW_SCENE.SCENE.inventoryWindow.closeWindow()  : WINDOW_SCENE.SCENE.inventoryWindow.openWindow() 
        })
      }

      update() {

      }
    //   let ourGame = this.scene.get('PlayScene');
    // scoreText.setScrollFactor( 0 );
}
    
export default HudScene






