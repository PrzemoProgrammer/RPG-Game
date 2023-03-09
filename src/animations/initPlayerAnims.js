
function initPlayerAnims(scene){
    scene.anims.create({
      key: 'player-idle',
      frames: scene.anims.generateFrameNumbers('player-idle', {start: 0, end: 7}),
      frameRate: 10, 
      repeat: -1
    })

    scene.anims.create({
      key: 'player-walk-right',
      frames: scene.anims.generateFrameNumbers('player-walk-right', {start: 0, end: 7}),
      frameRate: 10, 
      repeat: -1
    })

    scene.anims.create({
      key: 'player-take-hit',
      frames: scene.anims.generateFrameNumbers('player-take-hit', {start: 0, end: 5}),
      frameRate: 10, 
      repeat: 0
    })

    scene.anims.create({
      key: 'player-death',
      frames: scene.anims.generateFrameNumbers('player-death', {start: 0, end: 12}),
      frameRate: 10, 
      repeat: 0
    })

    scene.anims.create({
      key: 'player-shoot-attack',
      frames: scene.anims.generateFrameNumbers('player-shoot-attack', {start: 0, end: 6}),
      frameRate: 10, 
      repeat: 0
    })

    scene.anims.create({
        key: 'player-sword-attack',
        frames: scene.anims.generateFrameNumbers('player-sword-attack', {start: 0, end: 10}),
        frameRate: 10, 
        repeat: 0
    })

    scene.anims.create({
      key: 'fall-rock-attack',
      frames: scene.anims.generateFrameNumbers('fall-rock-attack', {start: 0, end: 17}),
      frameRate: 10, 
      repeat: 0
  })

    scene.anims.create({
      key: 'freeze-spin-attack',
      frames: scene.anims.generateFrameNumbers('freeze-spin-attack', {start: 0, end: 10}),
      frameRate: 10, 
      repeat: 0
  })
  


    scene.anims.create({
      key: 'profilePhotoHUD',
      frames: scene.anims.generateFrameNumbers('profilePhotoHUD', {start: 0, end: 3}),
      frameRate: 5, 
      repeat: -1
  })



  scene.anims.create({
    key: 'meteorite-fire',
    frames: scene.anims.generateFrameNumbers('meteorite-fire', {start: 0, end: 6}),
    frameRate: 15, 
    repeat: -1
  })

  scene.anims.create({
    key: 'meteorite-explosion',
    frames: scene.anims.generateFrameNumbers('meteorite-explosion', {start: 0, end: 5}),
    frameRate: 10, 
    repeat: 0
  })

  scene.anims.create({
    key: 'ground-crash',
    frames: scene.anims.generateFrameNumbers('ground-crash', {start: 0, end: 2}),
    frameRate: 5, 
    repeat: 0
  })





  scene.anims.create({
    key: 'tornado',
    frames: scene.anims.generateFrameNumbers('tornado', {start: 0, end: 9}),
    frameRate: 10, 
    repeat: 0
  })

  scene.anims.create({
    key: 'snowstorm',
    frames: scene.anims.generateFrameNumbers('snowstorm', {start: 0, end: 4}),
    frameRate: 10, 
    repeat: 2
  })

  scene.anims.create({
    key: 'ice',
    frames: scene.anims.generateFrameNumbers('ice', {start: 0, end: 4}),
    frameRate: 10, 
    repeat: 0
  })

  scene.anims.create({
    key: 'frozenState',
    frames: scene.anims.generateFrameNumbers('frozenState', {start: 0, end: 5}),
    frameRate: 10, 
    repeat: 0
  })






  scene.anims.create({
    key: 'NPC-shop',
    frames: scene.anims.generateFrameNumbers('NPC-shop', {start: 0, end: 7}),
    frameRate: 10, 
    repeat: -1
  })





  scene.anims.create({
    key: 'NPC-quest',
    frames: scene.anims.generateFrameNumbers('NPC-quest', {start: 0, end: 5}),
    frameRate: 10, 
    repeat: -1
  })





}

  export default initPlayerAnims