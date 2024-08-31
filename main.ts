input.onButtonPressed(Button.A, function () {
    player.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    player.turn(Direction.Right, 90)
})
let food: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 2)
basic.forever(function () {
    food = game.createSprite(randint(2, 4), randint(2, 4))
    food.set(LedSpriteProperty.Brightness, 40)
    basic.pause(5000)
})
basic.forever(function () {
    player.move(1)
    basic.pause(1000)
})
basic.forever(function () {
    if (player.isTouchingEdge()) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (food.isTouching(player)) {
        game.addScore(1)
        food.delete()
    }
})
