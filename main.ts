namespace SpriteKind {
    export const Camera = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    lane += -1
    if (lane < 1) {
        lane = 1
    }
})
function add_new_obstacle_not_functional () {
    newEnemy = enemyList[randint(0, 2)]
    newEnemy.setPosition(character.x + (120 + randint(0, maxObstacleDistance)), randint(1, 3) * 30)
    console.log(enemyList.length)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    lane += 1
    if (lane > 3) {
        lane = 3
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let newEnemy: Sprite = null
let enemyList: Sprite[] = []
let character: Sprite = null
let maxObstacleDistance = 0
let lane = 0
let speed = 96
lane = 2
maxObstacleDistance = 280
character = sprites.create(img`
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
enemyList = [sprites.create(img`
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
    `, SpriteKind.Enemy), sprites.create(img`
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
    `, SpriteKind.Enemy)]
for (let value of enemyList) {
    value.setPosition(0, 200)
}
let pointList = sprites.allOfKind(SpriteKind.Food)
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
    for (let value of enemyList) {
        if (value.x <= character.x - 40 || value.x >= character.x + 400) {
            value.setPosition(character.x + (120 + randint(0, maxObstacleDistance)), randint(1, 3) * 30)
        }
    }
})
