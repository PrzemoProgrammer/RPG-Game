

class InformationBoard {
    constructor(scene, config) {
        this.scene = scene

        this.informationWindow = this.scene.add.sprite(0, 0, 'over-window-information').setOrigin(0, 0)
        this.descriptionText = this.scene.add.text(this.informationWindow.x + 10, this.informationWindow.y + 30, config.description.text, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0,0)
        // this.descriptionText = this.scene.add.text(10, 30, config.description.text, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0,0)


        if(config.description.wordWrap){
            this.descriptionText.setWordWrapWidth(this.informationWindow.displayWidth -20, true)
        }
        else{
            let widthDifference = this.descriptionText.displayWidth - this.informationWindow.displayWidth
            this.informationWindow.displayWidth += +20 +widthDifference
        }

        this.nameText = this.scene.add.text(this.informationWindow.displayWidth/2 , this.informationWindow.y, config.name, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0.5,0)
        this.informationContainer = this.scene.add.container(canvasData.cw/2 - this.informationWindow.displayWidth/2 , canvasData.ch/2 - this.informationWindow.displayHeight/2, [this.informationWindow, this.descriptionText, this.nameText]).setDepth(1003)

        if(config.x && config.y) {
            this.informationContainer.setPosition(config.x, config.y)
        }

        if(config.cost) {
            this.costText = this.scene.add.text(this.informationWindow.x + 10, this.informationWindow.y +160, "Cost: " +  config.cost, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0,0)
            this.informationContainer.add(this.costText)
        }
    }

    openBoard(){
        this.changeBoardVisibility(true)
    }

    closeBoard() {
        this.changeBoardVisibility(false)
    }

    changeBoardVisibility(bool) {
        this.informationContainer.setVisible(bool).setActive(bool)
    }

    setPosition(x, y){
        this.informationContainer.x = x
        this.informationContainer.y = y
    }
}

export default InformationBoard


























// class InformationBoard {
//     constructor(scene, config) {
//         this.scene = scene

//         this.informationWindow = this.scene.add.sprite(0, 0, 'over-window-information').setOrigin(0, 0)

//         if(config.description.wordWrap) 
//             this.descriptionText = this.scene.add.text(10, 30, config.description.text, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',wordWrap: { width: this.informationWindow.displayWidth -20, useAdvancedWrap: true }}).setOrigin(0,0)
//         else {
//             this.descriptionText = this.scene.add.text(10, 30, config.description.text, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0,0)
//             if(this.descriptionText.displayWidth >= this.informationWindow.displayWidth) {
//                 this.setInformationWindowWidth() 
//             }
//         }

//         this.nameText = this.scene.add.text(this.informationWindow.displayWidth/2 , 0, config.name, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0.5,0)
//         this.informationContainer = this.scene.add.container(canvasData.cw/2 - this.informationWindow.displayWidth/2 , canvasData.ch/2 - this.informationWindow.displayHeight/2, [this.informationWindow, this.descriptionText, this.nameText]).setDepth(1003)

//         if(config.x && config.y) {
//             this.informationContainer.setPosition(config.x, config.y)
//         }

//         if(config.cost) {
//             this.costText = this.scene.add.text(10, 150, "Cost: " +  config.cost, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0,0)
//             this.informationContainer.add(this.costText)
//         }
//     }

//     openBoard(){
//         this.changeBoardVisibility(true)
//     }

//     closeBoard() {
//         this.changeBoardVisibility(false)
//     }

//     changeBoardVisibility(bool) {
//         this.informationContainer.setVisible(bool).setActive(bool)
//     }

//     setPosition(x, y){
//         this.informationContainer.x = x
//         this.informationContainer.y = y
//     }

//     setInformationWindowWidth(){
//         let widthDifference = this.descriptionText.displayWidth - this.informationWindow.displayWidth
//         this.informationWindow.displayWidth += +20 +widthDifference
//     }
// }

// export default InformationBoard