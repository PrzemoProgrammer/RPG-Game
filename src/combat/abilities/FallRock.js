
class FallRock {
    constructor(scene, x, y, rock, ribbon, eruption, crash, heat, damage) {
        this.scene = scene
        this.x = x
        this.y = y
        this.rock = rock
        this.ribbon = ribbon
        this.eruption = eruption
        this.crash = crash
        this.heat = heat
        this.damage = damage
// x = 400
//y = 350
        this.ribbon = this.scene.add.sprite(440, -200, this.ribbon).setOrigin(0, 0)
        this.rock = this.scene.add.image(580, 360, this.rock)
        this.groundCrash = this.scene.add.sprite(450, 360, this.crash).setOrigin(0, 0)
        this.groundHeat = this.scene.add.sprite(450, 360, this.heat).setOrigin(0, 0)
        this.explosion = this.scene.add.sprite(340, -30, this.eruption).setOrigin(0, 0)

        this.ribbonRockContainer = scene.add.container(this.x , this.y , [this.ribbon, this.rock])
        this.explosionCrashContainer = scene.add.container(this.x , this.y , [this.groundCrash, this.groundHeat, this.explosion])

        this.ribbonRockContainer.setDepth(1000)
        this.explosionCrashContainer.visible = false
    }

    update(){

    }

    active(){
        this.ribbon.play('meteorite-fire', true)

        this.scene.tweens.add({
            targets: this.rock,
            angle: 360,
            duration: 5000,
            repeat: -1,
        })

        this.scene.tweens.add({
            targets: this.ribbonRockContainer,
            y: this.ribbonRockContainer.y + 1650,
            duration: 1300,
            onComplete: () => {
                this.ribbonRockContainer.destroy()
                this.explosionCrashContainer.visible = true
                this.scene.cameras.main.shake(300);
                this.explosion.play('meteorite-explosion', true)
                .once("animationcomplete",()=>{
                    this.explosion.visible = false
                    this.scene.tweens.add({
                        targets: this.groundHeat,
                        alpha: 0,
                        duration: 4000,
                    })
                })
                this.groundCrash.play('ground-crash', true)
                .once("animationcomplete",()=>{
                    this.scene.time.delayedCall(5000, () => {
                        this.scene.tweens.add({
                            targets: this.groundCrash,
                            alpha: 0,
                            duration: 2000,
                            onComplete: () => {
                                this.explosionCrashContainer.destroy()
                            }
                        })
                    })
                })
            }
        })
    }

    setPosition(x, y){
        this.ribbonRockContainer.setPosition(x -400, y -2000)
        this.explosionCrashContainer.setPosition(x -400, y -350)
    }
}
export default FallRock