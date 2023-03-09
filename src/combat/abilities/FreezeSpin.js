class FreezeSpin {
    constructor(scene, x, y, icestormImg, iceImg, dmg, stunTime) {
        this.scene = scene
        this.x = x
        this.y = y
        this.icestormImg = icestormImg
        this.iceImg = iceImg
        this.dmg = dmg
        this.stunTime = stunTime

        this.freezeStates = []
        this.targets = []

        this.icestorm = this.scene.add.sprite(this.x, this.y, this.icestormImg)
    }

    update(){

    }

    active(){
        this.scene.tweens.add({
            targets: this.icestorm,
            alpha: 0,
            duration: 1000,
        })
        this.icestorm.play(this.icestormImg, true)
        .once("animationcomplete",()=>{
            this.icestorm.destroy()
        })
    }

    setPosition(x, y){
        this.icestorm.setPosition(x +45, y +40)
    }

    deactivation(){
        this.scene.time.delayedCall(this.stunTime, () => {
            this.freezeStates.forEach(states => {
                states.playReverse('frozenState', true)
                .once("animationcomplete",()=>{
                    this.targets.forEach( targets =>{ targets.character.play(targets.state.idle, true), targets.canMove = true, targets.canAttack = true })
                    for(let r=0; r < this.freezeStates.length; r++) {
                        this.freezeStates[r].destroy()
                    }
                })
            })
        })
    }

    activeFrozenState(enemy){
        this.freezeStates.unshift(this.scene.add.sprite(enemy.characterContainer.x -40, enemy.characterContainer.y + enemy.characterContainer.body.height -70, 'frozenState').setOrigin(0, 0))
        this.targets.unshift(enemy)

        this.freezeStates[0].play('frozenState', true).setDepth(2000)

        this.targets[0].canMove = false
        this.targets[0].canAttack = false
        this.targets[0].character.anims.stop()

        if(this.freezeStates.length >1 ) return
        this.deactivation()
    }
}
export default FreezeSpin



















































// class FreezeSpin {
//     constructor(scene, x, y, icestormImg, iceImg, dmg, stunTime) {
//         this.scene = scene
//         this.x = x
//         this.y = y
//         this.icestormImg = icestormImg
//         this.iceImg = iceImg
//         this.dmg = dmg
//         this.stunTime = stunTime

//         this.icesOnEnemies = []
//         this.targets = []

//         this.icestorm = this.scene.add.sprite(this.x, this.y, this.icestormImg)
//         //
//     }

//     update(){

//     }

//     activate(){
//         this.scene.tweens.add({
//             targets: this.icestorm,
//             alpha: 0,
//             duration: 1000,
//         })
//         this.icestorm.play(this.icestormImg, true)
//         .once("animationcomplete",()=>{
//             this.icestorm.destroy()
//         })
//     }

//     setPosition(x, y){
//         this.icestorm.setPosition(x +45, y +40)
//     }

//     handleFreezedEnemies(){
       
//         this.freezeDelayedCall = this.scene.time.delayedCall(this.stunTime, () => {
//             this.icesOnEnemies.forEach(states => {
//                 states.playReverse('frozenState', true)
//                 .once("animationcomplete",()=>{
//                     this.targets.forEach( targets =>{ 
//                         targets.character.play(targets.state.idle, true), targets.canMove = true, targets.canAttack = true 
//                     })

//                     for(let r=0; r < this.icesOnEnemies.length; r++) {
//                         this.icesOnEnemies[r].destroy()
//                     }

//                     this.icesOnEnemies = []
//                 })
//             })
//         })
//     }

//     freezeEnemy(enemy){
//         const iceOnEnemy = this.scene.add.sprite(enemy.characterContainer.x -40, enemy.characterContainer.y + enemy.characterContainer.body.height -70, 'frozenState')
//         .setOrigin(0, 0).play('frozenState', true).setDepth(2000)
        
//         this.icesOnEnemies.push(iceOnEnemy)
//         this.targets.push(enemy)

//         enemy.canMove = false
//         enemy.canAttack = false
//         enemy.character.anims.stop()

//         if(!this.freezeDelayedCall || !this.freezeDelayedCall.active)   this.handleFreezedEnemies()
     
//     }
    

// }
// export default FreezeSpin