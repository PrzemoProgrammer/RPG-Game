import Button from "../Button";


export default class Window {
    constructor(scene, config) {
        this.scene = scene
        this.config = config

        this.canOpen = true
        
        this.windowSprite = this.scene.add.sprite(0, 0, 'window').setOrigin(0,0)
               
        this.name = this.scene.add.sprite(this.windowSprite.x + this.windowSprite.displayWidth/2 , this.windowSprite.y + 5, config.name).setOrigin(0.5, 0)
        this.escapeButton = new Button(this.scene, this.windowSprite.x  + this.windowSprite.displayWidth - 30, this.windowSprite.y, 'closeButton').onClick(()=>{
            this.isOpen() ? this.closeWindow() : this.openWindow()
        })
        
        this.windowContainer = this.scene.add.container(this.scene.game.canvas.clientWidth/2 - this.windowSprite.displayWidth/2, this.scene.game.canvas.clientHeight/2 -this.windowSprite.displayHeight/2, [this.windowSprite, this.name, this.escapeButton])
        if(config.position){
            this.windowContainer.x = config.position.x
            this.windowContainer.y = config.position.y
        }

        this.windowContainer.setDepth(1000)
    }


    openWindow(){
        this.changeWindowVisibility(true)
    }

    closeWindow() {
        this.changeWindowVisibility(false)
    }

    changeWindowVisibility(bool) {
        this.windowContainer.setVisible(bool).setActive(bool)
    }

    isOpen(){
        return this.windowContainer.visible
    }

    moveable(){
        this.windowContainer.setSize(200, 200);
        this.windowContainer.setInteractive()
        this.scene.input.setDraggable(this.windowContainer);
        this.scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
    }
}
