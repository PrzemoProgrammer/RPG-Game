import InformationBoard from "../InformationBoard";

        class Item extends Phaser.GameObjects.Sprite{
            constructor(scene, config) {
                super(scene, config.x, config.y, config.sprite)

                this.scene = scene; 
                this.x = 0
                this.y = 0
                this.config = config

                this.sprite = config.sprite 
                
                this.setDepth(1000) 
               this.scene.add.existing(this);

                if(config.cost)
                this.cost = config.cost
        
                this.itemInformation = new InformationBoard(this.scene, config)
        
                this.setInteractive()
                this.initPointer()
            }
        
            initPointer(){
                this.pointerOver()
                this.pointerOut()
            }
        
            pointerOver(){
                this.on('pointerover', () =>{``
                    let x = this.parentContainer.active ? x = this.parentContainer.x + this.x + this.width : x = this.x + this.width
                    let y =  this.parentContainer.active ? y = this.parentContainer.y + this.y : y = this.y
                    
                    this.itemInformation.setPosition(x, y)
                    this.itemInformation.openBoard()
                })
            }
        
            pointerOut(){
                this.on('pointerout', () =>{
                    this.itemInformation.closeBoard()
                })
            }
        
            setPosition(x,y){
                this.x = x
                this.y = y
            }
        }
        
        export default Item
























// class Item {
//     constructor(scene, config) {
//         this.scene = scene;
        
//         if(config.cost)
//         this.cost = config.cost

//         this.sprite = this.scene.add.sprite(config.x, config.y, config.sprite).setOrigin(0, 0).setDepth(1000) 

//         this.itemInformation = new InformationBoard(this.scene, config)

//         this.sprite.setInteractive()
//         this.initPointer()
//     }

//     initPointer(){
//         this.pointerOver()
//         this.pointerOut()
//     }

//     pointerOver(){
//         this.sprite.on('pointerover', () =>{
//             let x = this.sprite.parentContainer.active ? x = this.sprite.parentContainer.x + this.sprite.x + this.sprite.width : x = this.sprite.x + this.sprite.width
//             let y =  this.sprite.parentContainer.active ? y = this.sprite.parentContainer.y + this.sprite.y : y = this.sprite.y

//             this.itemInformation.setPosition(x, y)
//             this.itemInformation.openBoard()
//         })
//     }

//     pointerOut(){
//         this.sprite.on('pointerout', () =>{
//             this.itemInformation.closeBoard()
//         })
//     }

//     setPosition(x,y){
//         this.sprite.x = x
//         this.sprite.y = y
//     }
// }

// export default Item