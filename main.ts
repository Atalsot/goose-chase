namespace SpriteKind {
    export const Camera = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    lane += -1
    if (lane < 1) {
        lane = 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    lane += -0.5
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    lane += 0.5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    lane += 1
    if (lane > 3) {
        lane = 3
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(50)
    pause(200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let lane = 0
let speed = 96
lane = 2
let maxObstacleDistance = 280
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
let enemyList = [sprites.create(img`
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
let papers = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f 5 5 5 5 f . . . . . 
    . . . . f 5 . . . . 5 f . . . . 
    . . . . f 5 . 5 5 . 5 f . . . . 
    . . . . f 5 . 5 5 . 5 f . . . . 
    . . . . f 5 . . . . 5 f . . . . 
    . . . . . f 5 5 5 5 f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
papers.setPosition(0, 200)
game.onUpdateInterval(1000, function () {
    if (character.x >= 1000) {
        character.setPosition(50, 30 * lane)
        frontCam.setPosition(90, 60)
    }
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(5)
    speed += 2
    character.setVelocity(speed, 0)
    frontCam.setVelocity(speed, 0)
    if (maxObstacleDistance > 100) {
        maxObstacleDistance += -2
        console.log(maxObstacleDistance)
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
    if (papers.x <= character.x - 40 || papers.x >= character.x + 600) {
        papers.setPosition(character.x + (120 + randint(60, 1.5 * maxObstacleDistance)), randint(1, 3) * 30)
    }
})
