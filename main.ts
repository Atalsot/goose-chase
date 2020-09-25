namespace SpriteKind {
    export const Camera = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    lane += -1
    if (lane < 1) {
        lane = 1
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    lane += 1
    if (lane > 3) {
        lane = 3
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let lane = 0
let speed = 96
lane = 2
let maxObstacleDistance = 1800
let character = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
character.setPosition(20, 60)
character.setVelocity(speed, 0)
let frontCam = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Camera)
frontCam.setPosition(60, 60)
frontCam.setVelocity(speed, 0)
scene.cameraFollowSprite(frontCam)
tiles.setTilemap(tilemap`level_1`)
let enemyList1 = [sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 . 2 2 . . . . . . 
    . . . . 2 2 . . . 2 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . 2 2 . . . . . 
    . . . . 2 2 . . . 2 . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e . . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . e e e 7 7 e e e e . . . . 
    . . . e e e 7 7 e e e e . . . . 
    . . . e e e 7 7 e e e . . . . . 
    . . . e e e e e e e e . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . . e e e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 . . . . . 
    . . . 8 8 8 8 8 8 8 8 . . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)]
for (let value of enemyList1) {
    value.setPosition(0, 200)
}
maxObstacleDistance = 280
game.onUpdateInterval(5000, function () {
    enemyList1.push(enemyList1[randint(0, 2)])
    enemyList1[enemyList1.length - 1].setPosition(0, 200)
})
game.onUpdateInterval(1000, function () {
    if (character.x >= 1000) {
        character.setPosition(50, 30 * lane)
        frontCam.setPosition(90, 60)
    }
})
forever(function () {
    character.y = 30 * lane
})
forever(function () {
    for (let value of enemyList1) {
        if (value.x <= character.x - 40 || value.x >= character.x + 400) {
            value.setPosition(character.x + (120 + randint(0, maxObstacleDistance)), randint(1, 3) * 30)
        }
    }
})
