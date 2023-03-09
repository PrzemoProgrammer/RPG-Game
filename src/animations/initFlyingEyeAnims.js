function initFlyingEyeAnims(scene){

    scene.anims.create({
        key: 'flyingEye-idle',
        frames: scene.anims.generateFrameNumbers('flyingEye-idle', {start: 0, end: 7}),
        frameRate: 10, 
        repeat: -1
      })
  
      scene.anims.create({
        key: 'flyingEye-take-hit',
        frames: scene.anims.generateFrameNumbers('flyingEye-take-hit', {start: 0, end: 3}),
        frameRate: 10, 
        repeat: 0
      })
  
      scene.anims.create({
        key: 'flyingEye-death',
        frames: scene.anims.generateFrameNumbers('flyingEye-death', {start: 0, end: 3}),
        frameRate: 5, 
        repeat: 0
      })
  
      scene.anims.create({
        key: 'flyingEye-attack',
        frames: scene.anims.generateFrameNumbers('flyingEye-attack', {start: 0, end: 7}),
        frameRate: 10, 
        repeat: 0
      })
}
export default initFlyingEyeAnims