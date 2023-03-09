import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.image('grass', './src/assets/grass.png');
    this.load.image('healthBarContainer', './src/assets/healthBarContainer.png');
    this.load.image('healthBar', './src/assets/healthBar.png');

    this.load.image('closeButton', './src/assets/closeButton.png');
    
    this.load.image('blankBackgroundWindow', './src/assets/blankBackgroundWindow.png');

    

    // ! SHOP NPC
    this.load.spritesheet('NPC-shop', './src/assets/shopNPC.png', {
      frameWidth: 288, frameHeight: 127
    });
    this.load.image('shopInscription', './src/assets/shopInscription.png');
    this.load.image('health-potion', './src/assets/healthPotion.png');
    this.load.image('pink-sword', './src/assets/pinkSword.png');
    this.load.image('inventory-slot', './src/assets/inventorySlot.png');
    this.load.image('over-window-information', './src/assets/overWindowInformation.png');
    this.load.image('shop-money-background', './src/assets/shopWindowMoneyBackground.png');


    // ! QUEST NPC

    this.load.spritesheet('NPC-quest', './src/assets/questNPCIdle.png', {
      frameWidth: 288, frameHeight: 127
    });
    this.load.image('questInscription', './src/assets/questInscription.png');


    // ! SKILL ICONS
    this.load.image('falling-rock-icon', './src/assets/fallingRockSkillIcon.png');
    this.load.image('freeze-spin-icon', './src/assets/freezeSpinSkillIcon.png');
    this.load.image('load-skill-image', './src/assets/loadSKillImage.png');
    this.load.image('player-shoot-bullet', './src/assets/playerShootBullet.png');
    



    // ! FALL METEORITE SKILL

    this.load.image('meteorite', './src/assets/meteorite.png');
    this.load.image('ground-heat', './src/assets/groundHeat.png');

    this.load.spritesheet('meteorite-fire', './src/assets/meteoriteFire.png', {
      frameWidth: 286, frameHeight: 640
    });

    this.load.spritesheet('meteorite-explosion', './src/assets/meteoriteExplosion.png', {
      frameWidth: 458, frameHeight: 499
    });

    this.load.spritesheet('ground-crash', './src/assets/groundCrash.png', {
      frameWidth: 303, frameHeight: 123
    });



    // ! SKILL FREEZE SPIN

    this.load.spritesheet('tornado', './src/assets/tornado.png', {
      frameWidth: 180, frameHeight: 138
    });

    this.load.spritesheet('snowstorm', './src/assets/snowstorm.png', {
      frameWidth: 486, frameHeight: 276
    });

    this.load.spritesheet('ice', './src/assets/ice.png', {
      frameWidth: 382, frameHeight: 272
    });

    this.load.spritesheet('frozenState', './src/assets/frozenState.png', {
      frameWidth: 135, frameHeight: 77
    });
    


      // ! PLAYER

      this.load.spritesheet('player-idle', './src/assets/playerIdle.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('player-walk-right', './src/assets/playerWalkRightSprite.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('player-take-hit', './src/assets/playerTakeHit.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('player-death', './src/assets/playerDeath.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('player-sword-attack', './src/assets/playerSwordAttack.png', {
        frameWidth: 288, frameHeight: 128
      });

       this.load.spritesheet('player-shoot-attack', './src/assets/playerShootAttack.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('fall-rock-attack', './src/assets/fallRockAttack.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('freeze-spin-attack', './src/assets/freezeSpinAttack.png', {
        frameWidth: 288, frameHeight: 128
      });

 


      // ! SKIELETON ENEMY

      this.load.spritesheet('skeleton-idle', './src/assets/skeletonIdle.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('skeleton-take-hit', './src/assets/skeletonTakeHit.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('skeleton-death', './src/assets/skeletonDeath.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('skeleton-attack', './src/assets/skeletonAttack.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('skeleton-walk-right', './src/assets/skeletonWalkRight.png', {
        frameWidth: 288, frameHeight: 128
      });



      // ! MUSHROM ENEMY

      this.load.spritesheet('mushroom-idle', './src/assets/mushroomIdle.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('mushroom-walk-right', './src/assets/mushroomWalkRight.png', {
        frameWidth: 288, frameHeight: 128
      });
      
      this.load.spritesheet('mushroom-take-hit', './src/assets/mushroomTakeHit.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('mushroom-death', './src/assets/mushroomDeath.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('mushroom-attack', './src/assets/mushroomAttack.png', {
        frameWidth: 288, frameHeight: 128
      });

  
      // ! FLYING EYE ENEMY
      this.load.spritesheet('flyingEye-idle', './src/assets/flyingEyeIdle.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('flyingEye-take-hit', './src/assets/flyingEyeTakeHit.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('flyingEye-death', './src/assets/flyingEyeDeath.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('flyingEye-attack', './src/assets/flyingEyeAttack.png', {
        frameWidth: 288, frameHeight: 128
      });



      // ! HUD SCENE
       this.load.spritesheet('profilePhotoHUD', './src/assets/playerProfilePhotoHUD.png', {
        frameWidth: 63, frameHeight: 63
      });

      this.load.image('skillsBannerHUD', './src/assets/skillsBannerHUD.png');
      this.load.image('profileHUD', './src/assets/profileHUD.png');
      this.load.image('window', './src/assets/window.png');
      this.load.image('inventoryButtonHUD', './src/assets/inventoryButtonHUD.png');
      this.load.image('inventoryInscription', './src/assets/inventoryInscription.png');
      this.load.image('profileBackgroundHUD', './src/assets/profileBackgroundHUD.png');
      this.load.image('manaBarHUD', './src/assets/manaBarHUD.png');


      // this.load.on('complete', ()=> {
      //   loadingText.destroy();
      //   progressBar.destroy();
      //   progressBox.destroy();
      //   this.scene.start('CharacterSelectionScene')
      // })
  }

  create() {
    this.scene.launch('PlayScene', {
      onPlaySceneCreated:this.onPlaySceneCreated.bind(this) // () => this.onPlaySceneCreated()
    });
  }

  onPlaySceneCreated() {
    this.launchHUD()
  }

  launchHUD() {
    this.scene.launch("WindowScene",)
    this.scene.launch("HudScene",)
  }
}

export default PreloadScene