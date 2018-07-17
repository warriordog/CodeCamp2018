var thisIsTrue = true;
var thisIsFalse = false;
var thisIsNull = null;

console.log('thisIsTrue = ' + thisIsTrue);
console.log('thisIsFalse = ' + thisIsFalse);
console.log('thisIsNull = ' + thisIsNull);

var thisIsAString = 'Code Camp';
console.log('thisIsAString = ' + thisIsAString);

console.log('Hello world!');

function test() {
    console.log('hello!');
}

test();
test();

const DIST_UNKNOWN = -2;
const DIST_SAFE = -1;
const DIST_HERE = 0;

const OBSERVED_NO = 0;
const OBSERVED_LOOKED = 1;
const OBSERVED_VISITED = 2;

const RATING_IMPOSSIBLE = -1.0;
const RATING_WORST = 0.0;
const RATING_BAD = 0.25;
const RATING_NEUTRAL = 0.5;
const RATING_GOOD = 0.75;
const RATING_BEST = 1.0;

const CONF_WORST = 0.0;
const CONF_BAD = 0.25;
const CONF

var maze = new Array(10);
for (var x = 0; x < maze.length; x++) {
    maze[x] = new Array(10);
    for (var y = 0; y < maze[x].length; y++) {
        maze[x][y] = {
            x: x,
            y: y,

            observed: OBSERVED_NO,

            fire: DIST_UNKNOWN,
            pit: DIST_UNKNOWN,
            exit: DIST_UNKNOWN,
            start: DIST_UNKNOWN,
            
            walls: {
                north: false,
                east: false,
                south: false,
                west: false
            }
        };
    }
}

function isInBounds(x, y) {
    return x >= 0 && x < 10 && y >= 0 && y < 10;
}

function getOffsetX(dir) {
    /*
    if (dir == 'north') {
        return 0;
    }
    if (dir == 'south') {
        return 0;
    }
    */
    if (dir == 'east') {
        return 1;
    }
    if (dir == 'west') {
        return -1;
    }

    return 0;
}

function getOffsetY(dir) {
    if (dir == 'north') {
        return -1;
    }
    if (dir == 'south') {
        return 1;
    }

    return 0;
}

function getCellbyDir(x, y, dir) {
    var nX = x + getOffsetX(dir);
    var nY = y + getOffsetY(dir);

    if (isInBounds(nX, nY)) {
        return maze[nX][nY];
    } else {
        return null;
    }
}

function invertDir(dir) {
    if (dir == 'north') {
        return 'south';
    }
    if (dir == 'south') {
        return 'north';
    }
    if (dir == 'east') {
        return 'west';
    }
    if (dir == 'west') {
        return 'east';
    }
    return null;
}

function addWall(x, y, dir) {
    var cell = maze[x][y];
    cell.walls[dir] = true;

    var neighbor = getCellByDir(x, y, dir);
    if (neighbor != null) {
        neighbor.walls[invertDir(dir)] = true;
    }
}

function canMoveInDir(x, y, dir) {
    var cell = maze[x][y];
    
    // check for walls
    if (cell.walls[dir]) {
        return false;
    }

    // check bounds
    return getCellbyDir(x, y, dir) != null;
}

function shouldMoveInDir(x, y, dir) {
    if (canMoveInDir(x, y, dir)) {
        var next = getCellbyDir(x, y, dir);
        if (next.fire == DIST_HERE) {
            return false;
        }
        if (next.pit == DIST_HERE) {
            return false;
        }
    }
}

function createZeroRating() {
    return {
        rating: RATING_IMPOSSIBLE,
        confidence: CONF_BEST
    };
}

function calcFireRate(fire) {
    if (fire == DIST_UNKNOWN) {
        return RATING_NEUTRAL;
    }
    if (fire == DIST_HERE) {
        return RATING_WORST;
    }
    if (fire == DIST_SAFE) {
        return RATING_GOOD;
    }
    return Math.min(RATING_GOOD, (fire / (MAX_DIST + 1)) * RATING_GOOD);
}

function calcFireConf(fire) {
    if (fire == DIST_UNKNOWN) {
        return CONF_;
    }
    if (fire == DIST_HERE) {
        return RATING_WORST;
    }
    if (fire == DIST_SAFE) {
        return RATING_GOOD;
    }
    return Math.min(RATING_GOOD, (fire / (MAX_DIST + 1)) * RATING_GOOD);
}


function getCellRating(cell) {
    var confidence = 0.0;
    var rating = 0.0;

    // value += weight * normalized value

    rating += 0.3 * calcFireRate(cell.fire);
    confidence += 0.3 * calcFireConf(cell.fire);

    rating += 0.3 * calcPitRate(cell.pit);
    confidence += 0.3 * calcFireConf(cell.fire);

    rating += 0.2 * calcVisitedRate(cell.visited);
    confidence += 0.2 * calcVisitedConf(cell.visited);

    rating += 0.2 * calcWallsRate(cell.walls);
    confidence += 0.2 * calcWallsConf(cell.walls);

    return {
        confidence: confidence,
        rating: rating
    }
}

function getCellRating(x, y) {
    if (isInBounds(x, y)) {
        return getCellRating(maze[x][y]);
    } else {
        return createZeroRating();
    }
}

function getCellRating(x, y, dir) {
    var cell = getCellByDir(x, y, dir);
    if (cell != null) {
        return createZeroRating();
    }
}
//console.log("maze to string" + maze.toString());

//maze.forEach(function (r, i) {
    //console.log('in loop')
    //maze[i] = new Array(10);
    //console.log("maze[" + i + "].length=" + maze[i].length)
//});

console.log("maze.length = " + maze.length);

/*
maze.forEach(function (row, x) {
    row.forEach(function (cell, y) {
        maze[x][y] = {
            x: x,
            y: y
        };
    })
})
*/

/*
maze.forEach(function (row, x) {row.forEach(function (cell, y) {
    console.log(x + ',' + y + " = " + JSON.stringify(cell));
})})
*/