function initSkeletonAnims(scene){
  
    scene.anims.create({
      key: 'skeleton-idle',
      frames: scene.anims.generateFrameNumbers('skeleton-idle', {start: 0, end: 3}),
      frameRate: 5, 
      repeat: -1
    })

    scene.anims.create({
      key: 'skeleton-walk-right',
      frames: scene.anims.generateFrameNumbers('skeleton-walk-right', {start: 0, end: 3}),
      frameRate: 5, 
      repeat: -1
    })

    scene.anims.create({
      key: 'skeleton-take-hit',
      frames: scene.anims.generateFrameNumbers('skeleton-take-hit', {start: 0, end: 3}),
      frameRate: 10, 
      repeat: 0
    })

    scene.anims.create({
      key: 'skeleton-death',
      frames: scene.anims.generateFrameNumbers('skeleton-death', {start: 0, end: 3}),
      frameRate: 10, 
      repeat: 0
    })

    scene.anims.create({
        key: 'skeleton-attack',
        frames: scene.anims.generateFrameNumbers('skeleton-attack', {start: 0, end: 7}),
        frameRate: 10, 
        repeat: 0
    })
  }

  export default initSkeletonAnims