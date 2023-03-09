class HealthBar {
    constructor(scene, x, y, maxHealth) {
        this.scene = scene;

        this.x = x
        this.y = y

        this.maxHealth = maxHealth
        this.health = this.maxHealth

        this.healthBarContainer = this.scene.add.sprite(-35, -25, 'healthBarContainer').setOrigin(0, 0).setScale(2)
        this.energybar = this.scene.add.sprite(-7, -15, 'healthBar').setOrigin(0, 0).setScale(2)
    }

    update(){
        this.energybar.displayWidth = this.getHealBarWidth();
    }

    getHealBarWidth(){
        let hpPercent = this.health / this.maxHealth;
        return this.energybar.displayWidth * hpPercent;
    }
}
export default HealthBar