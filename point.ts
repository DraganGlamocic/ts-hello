export class Point {
    constructor(private _x?: number, private _y?:number) {
    }

    draw() {
        console.log("X= [" + this._x + "]\nY= [" + this._y + "]");
    };
    getDistance(another: Point){
    }

    get x() {
        return this._x;
    }

    set x(value: number) {
        if (value < 0)
            throw new Error("Value cannot be less than 0.")
        this._x = value;
    }
}