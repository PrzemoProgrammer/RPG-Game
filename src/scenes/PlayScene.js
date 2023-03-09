import Phaser from 'phaser';
import { WINDOW_SCENE } from './scenes';
import { PLAY_SCENE } from './scenes';
import HandleInputs from '../utils/HandleInputs'
import MouseControl from '../utils/MouseControl';
import Player from '../entities/Player'
import Mushroom from '../entities/Mushroom'
import Skeleton from '../entities/Skeleton'
import FlyingEye from '../entities/FlyingEye'
import anims from '../animations/index'
import enemiesConfig from '../config/enemies/index'
import playerConfig from '../config/player/player'
import NPCsConfig from '../config/NPC/index'
import NPC from '../entities/NPC';


class PlayScene extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  create({onPlaySceneCreated}) {
    this.onPlaySceneCreated = onPlaySceneCreated 
    PLAY_SCENE.setScene(this) 

    window.canvasData = { 
        cw: this.game.config.width,
        ch: this.game.config.height,
    }
    // this.gw = this.game.config.width;
    // this.gh = this.game.config.height;
    
    anims.forEach(anim => anim(this))

    this.enemy = []
    this.NPC = []

    this.grass = this.add.image(0, 0, 'grass').setOrigin(0, 0)
    this.player = new Player(this, playerConfig)

    this.initSpawnEnemies()
    this.initSpawnNPCs()
  
    this.handleInputs = new HandleInputs(this)
    this.mouseControl = new MouseControl(this)

    this.cameras.main.startFollow(this.player.characterContainer, false, 0.5 , 0.5, - this.player.characterContainer.body.width/2, - this.player.characterContainer.body.height/2)
    this.cameras.main.setBounds(0, 0, this.grass.displayWidth, this.grass.displayHeight);
    this.physics.world.setBounds(0, 0, this.grass.displayWidth, this.grass.displayHeight);
    this.onPlaySceneCreated() 
  }

  update() {
    this.handleInputs.handleMovement()
    this.mouseControl.handleMovement()
    this.enemy.forEach(entity => entity.update())
    // this.NPC.forEach(entity => entity.update(this.player))
    this.updateDepth()
  }

  initSpawnNPCs() {
    NPCsConfig.forEach(NPCConfig => { 
      for(let i = 0; i < NPCConfig.count; ++i) {
        this.spawnNPC(NPCConfig)
      }
    })
  }

  spawnNPC(NPCConfig) {
    const npc = new NPC(this, NPCConfig)

    this.NPC.push(npc)
    this.physics.add.overlap(this.player.characterContainer, npc.characterContainer, () => this.openWindow(npc), undefined, this)
  }

  initSpawnEnemies() {
    enemiesConfig.forEach(enemyConfig => { 
      for(let i = 0; i < enemyConfig.count; ++i) {
        this.spawnEnemy(enemyConfig)
      }
    })
  }

  addEnemy(enemy) {
    this.enemy.push(enemy)
    this.physics.add.overlap(this.player.swordHitbox.hitbox, enemy.characterContainer, () => this.updateTakeEnemySwordDamage(enemy), undefined, this)
    this.physics.add.overlap(enemy.swordHitbox.hitbox, this.player.characterContainer, () => this.updateTakePlayerSwordDamage(enemy), undefined, this)
    this.physics.add.overlap(this.player.bullets, enemy.characterContainer, (enemyContainer, bullet) => this.updateTakeEnemyBulletDamage(enemy, bullet), undefined, this)

    this.physics.add.overlap(this.player.fallRockHitbox.hitbox, enemy.characterContainer, () => this.updateTakeEnemyFallRockDamage(enemy), undefined, this)
    this.physics.add.overlap(this.player.freezeSpinHitbox.hitbox, enemy.characterContainer, () => this.updateTakeEnemyFreezeSpinDamage(enemy), undefined, this)
  }

  removeEnemy(enemy) {
    const arrPosition = this.enemy.indexOf(enemy)
    this.enemy.splice(arrPosition, 1)
  }

  spawnEnemy(enemyConfig){
    let enemy = null;
  
    switch(enemyConfig.enemyType) {
      case  "mushroom": enemy = new Mushroom(this, enemyConfig); break;
      case  "skeleton": enemy = new Skeleton(this, enemyConfig); break;
      case  "flyingEye": enemy = new FlyingEye(this, enemyConfig); break;
    }
    this.addEnemy(enemy)
  }

  respawnEnemy(enemy) {
    this.removeEnemy(enemy)

    this.time.delayedCall(enemy.respawnTime, () => {
      enemy.character.destroy()
      this.spawnEnemy(enemy.config)
    })
  }

  openWindow(npc){
   if(npc.config.name === "SHOP") {
      WINDOW_SCENE.SCENE.openWindow("SHOP")
   }
   else if(npc.config.name === "QUEST") {
      WINDOW_SCENE.SCENE.openWindow("QUEST")
    }
  }

  updateTakePlayerSwordDamage(enemy){
    this.player.setTakeDamage(enemy.swordHitPower)
  }

  updateTakeEnemySwordDamage(enemy){
    enemy.setTakeDamage(this.player.swordHitPower)

    if(enemy.isDead()) {
      this.respawnEnemy(enemy)
    }
  }

  updateTakeEnemyFallRockDamage(enemy){
    enemy.setTakeDamage(this.player.fallRockPower)

    if(enemy.isDead()) {
      this.respawnEnemy(enemy)
    }
  }

  updateTakeEnemyFreezeSpinDamage(enemy){
    enemy.setTakeDamage(this.player.freezeSpinPower)

    if(enemy.isDead()) {
      this.respawnEnemy(enemy)
      return
    }
    this.player.freezeSpin.activeFrozenState(enemy)
  }

  updateTakeEnemyBulletDamage(enemy, bullet){
    enemy.setTakeDamage(this.player.shootHitPower)
    bullet.setActive(false)
    bullet.setVisible(false)
    bullet.body.enable = false

    if(enemy.isDead()) {
      this.respawnEnemy(enemy)
    }
  }

  updateDepth(){
    this.enemy.forEach(entity => entity.characterContainer.setDepth(entity.characterContainer.body.y + entity.characterContainer.body.height))
    this.NPC.forEach(entity => entity.characterContainer.setDepth(entity.characterContainer.body.y + entity.characterContainer.body.height))
    this.player.characterContainer.setDepth(this.player.characterContainer.body.y + this.player.characterContainer.body.height)
  }
}
export default PlayScene;

