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
    papers.setFlag(SpriteFlag.Invisible, true)
    pause(205)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let papers: Sprite = null
let lane = 0
let speed = 96
lane = 2
let maxObstacleDistance = 280
let character = sprites.create(img`
    . . . . . . . e e e e . . . . . 
    . . . . . . e e e e e e . . . . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 e e e d d f d . . . . 
    . . . 5 . e d e d d f d . . . . 
    . . . . . e d d d d d d d . . . 
    . . . . . . e d d d d d . . . . 
    . . . . . . . . d d d . . . . . 
    . . . . . f 5 5 f f 5 f . . . . 
    . . . . f f 5 5 5 5 5 f f . . . 
    . . . . f f 5 5 5 5 5 f f . . . 
    . . . . d d f f f f f d d . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 . 5 5 5 . . . . 
    . . . . 5 5 5 . . . 5 5 5 . . . 
    . . . f f f f . . . f f f f . . 
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
let Goose = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f f . . . 
    . . . . . f 1 1 1 1 1 1 f . . . 
    . . . . . f 1 1 f 1 2 2 f f . . 
    . . . . . f 1 1 1 1 2 2 2 f . . 
    . . . . . f 1 1 f f f f f . . . 
    . . . . . f 1 1 f . . . . . . . 
    . . . . . f 1 1 f . . . . . . . 
    . . f f f f 1 1 f . . . . . . . 
    . f f 1 1 1 1 1 f f . . . . . . 
    f f 1 1 1 1 1 1 1 1 f f . . . . 
    f 1 1 1 1 1 1 1 1 1 1 f . . . . 
    . f f 1 f 2 f f f f 2 f . . . . 
    . . . f f 2 f . . f 2 f . . . . 
    . . . . f 2 f . . f 2 f . . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Enemy)
Goose.setPosition(0, 60)
Goose.setVelocity(speed, 0)
scene.cameraFollowSprite(frontCam)
tiles.setTilemap(tilemap`level_1`)
let enemyList = [sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e . . . e e . . . e . . . 
    . . e e e e e e e e e e e e . . 
    . . . e . . . e e . . . e . . . 
    . . . e . . . e e . . . e . . . 
    . . e e e e e e e e e e e e . . 
    . . . e . . . e e . . . e . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f e e e f f . . . . . 
    . . . . f e e e e e e f . . . . 
    . . . f e e e e e e e e f . . . 
    . . . f e e e e e e e e f . . . 
    . . . f f f f f f e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f f . . . 
    . . . . . f 1 1 1 1 1 1 f . . . 
    . . . . . f 1 1 f 1 2 2 f f . . 
    . . . . . f 1 1 1 1 2 2 2 f . . 
    . . . . . f 1 1 f f f f f . . . 
    . . . . . f 1 1 f . . . . . . . 
    . . . . . f 1 1 f . . . . . . . 
    . . f f f f 1 1 f . . . . . . . 
    . f f 1 1 1 1 1 f f . . . . . . 
    f f 1 1 1 1 1 1 1 1 f f . . . . 
    f 1 1 1 1 1 1 1 1 1 1 f . . . . 
    . f f 1 f 2 f f f f 2 f . . . . 
    . . . f f 2 f . . f 2 f . . . . 
    . . . . f 2 f . . f 2 f . . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Enemy), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f f . . . 
    . . . . . f 1 1 1 1 1 1 f . . . 
    . . . . . f 1 1 f 1 2 2 f f . . 
    . . . . . f 1 1 1 1 2 2 2 f . . 
    . . . . . f 1 1 f f f f f . . . 
    . . . . . f 1 1 f . . . . . . . 
    . . . . . f 1 1 f . . . . . . . 
    . . f f f f 1 1 f . . . . . . . 
    . f f 1 1 1 1 1 f f . . . . . . 
    f f 1 1 1 1 1 1 1 1 f f . . . . 
    f 1 1 1 1 1 1 1 1 1 1 f . . . . 
    . f f 1 f 2 f f f f 2 f . . . . 
    . . . f f 2 f . . f 2 f . . . . 
    . . . . f 2 f . . f 2 f . . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Enemy)]
for (let value of enemyList) {
    value.setPosition(0, 200)
}
papers = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f . . . . 
    . . . . f f f d d d d d f f . . 
    . . . . f 1 1 f f f d d d d f . 
    . . . . f 8 8 1 1 8 f f d d f . 
    . . . f 8 1 1 1 8 1 8 1 f d f . 
    . . . f 8 1 1 1 8 8 8 1 f d f . 
    . . . f 1 8 8 1 8 1 8 1 f d f . 
    . . f 1 1 1 1 1 1 1 1 f d f . . 
    . . f 1 8 1 1 1 1 8 8 f d f . . 
    . . f 1 8 1 1 1 8 1 1 f d f . . 
    . . f 1 8 1 1 1 8 1 f d f . . . 
    . . . f 8 8 8 1 1 8 f d f . . . 
    . . . . f f f 1 1 1 f d f . . . 
    . . . . . . . f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
papers.setPosition(0, 200)
let gooseWall = sprites.create(img`
    ......ffffffff..
    ......f111111f..
    ......f11f122ff.
    ......f1111222f.
    ......f11fffff..
    ......f11f......
    ......f11f......
    ...ffff11f......
    ..ff11111ff.....
    .ff11111111ff...
    .f1111111111f...
    ..ff1f2ffff2f...
    ....ff2f..f2f...
    .....f2f..f2f...
    .....ffffffff...
    .....f111111f...
    .....f11f122ff..
    .....f1111222f..
    .....f11fffff...
    .....f11f.......
    .....f11f.......
    ..ffff11f.......
    .ff11111ff......
    ff11111111ff....
    f1111111111f....
    .ff1f2ffff2f....
    ...ff2f..f2f....
    ....f2f..f2f....
    ....fff..fff....
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    `, SpriteKind.Enemy)
gooseWall.setPosition(0, 200)
game.onUpdateInterval(1000, function () {
    if (character.x >= 1000) {
        frontCam.x += -1000
        character.x += -1000
        Goose.x += -1000
        for (let value2 of enemyList) {
            value2.x += -1000
        }
        papers.x += -1000
        gooseWall.x += -1000
    }
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(5)
    speed += 1.5
    character.setVelocity(speed, 0)
    frontCam.setVelocity(speed, 0)
    Goose.setVelocity(speed, 0)
    if (maxObstacleDistance > 100) {
        maxObstacleDistance += -3
    }
})
forever(function () {
    character.y = 32 * lane - 8
    Goose.y = 32 * lane - 8
})
forever(function () {
    for (let value22 of enemyList) {
        if (value22.x <= character.x - 40 || value22.x >= character.x + 400) {
            value22.setPosition(character.x + (120 + randint(0, maxObstacleDistance)), randint(1, 3) * 32 - 8)
        }
    }
    if (papers.x <= character.x - 40 || papers.x >= character.x + 600) {
        papers.setFlag(SpriteFlag.Invisible, false)
        papers.setPosition(character.x + (120 + randint(60, 1.5 * maxObstacleDistance)), randint(1, 3) * 32 - 8)
    }
    if (gooseWall.x <= character.x - 40 || gooseWall.x >= character.x + 600) {
        gooseWall.setPosition(character.x + (120 + randint(60, 1.5 * maxObstacleDistance)), randint(1, 3) * 32 - 8)
    }
})
