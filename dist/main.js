"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
let point = new point_1.Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();
