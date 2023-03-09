function initMushroomAnims(scene){

    scene.anims.create({
        key: 'mushroom-idle',
        frames: scene.anims.generateFrameNumbers('mushroom-idle', {start: 0, end: 3}),
        frameRate: 5, 
        repeat: -1
      })
  
      scene.anims.create({
        key: 'mushroom-walk-right',
        frames: scene.anims.generateFrameNumbers('mushroom-walk-right', {start: 0, end: 7}),
        frameRate: 5, 
        repeat: -1
      })
  
      scene.anims.create({
        key: 'mushroom-take-hit',
        frames: scene.anims.generateFrameNumbers('mushroom-take-hit', {start: 0, end: 3}),
        frameRate: 10, 
        repeat: 0
      })
      
      scene.anims.create({
        key: 'mushroom-death',
        frames: scene.anims.generateFrameNumbers('mushroom-death', {start: 0, end: 3}),
        frameRate: 10, 
        repeat: 0
      })
  
      scene.anims.create({
        key: 'mushroom-attack',
        frames: scene.anims.generateFrameNumbers('mushroom-attack', {start: 0, end: 7}),
        frameRate: 10, 
        repeat: 0
      })
    }
    export default initMushroomAnims
  