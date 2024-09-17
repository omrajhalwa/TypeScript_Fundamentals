

type keyInput = 'up' | 'down' |'left' | 'right';

function doSomething(keyPressed : keyInput) {

}


doSomething("up");
doSomething("left");

//error doSomething("gawrga");

enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

function doSomething1(keyPrssed : Direction) {

}

console.log(Direction.Down);
console.log(Direction.Up);


enum ResponseStatus {
    Success = 200,
    NotFount = 404,
    Error = 500
}

console.log(ResponseStatus.Success);