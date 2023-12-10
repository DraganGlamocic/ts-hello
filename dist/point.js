"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log("X= [" + this._x + "]\nY= [" + this._y + "]");
    }
    ;
    getDistance(another) {
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0)
            throw new Error("Value cannot be less than 0.");
        this._x = value;
    }
}
exports.Point = Point;
