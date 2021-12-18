import { COLOR_GREEN } from "../properties";

export default class Snake {
    constructor(p5) {
        this.drawer = p5;
        this.x = 0;
        this.y = 0;

        this.tail = [];
        this.tail[0] = this.drawer.createVector(this.x, this.y);
        this.len = 0;

        this.xdir = 0;
        this.ydir = 0;
    }

    changeDirectory(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update(w, h) {
        let head = this.tail[this.tail.length - 1].copy();
        this.tail.shift();

        head.x += this.xdir;
        head.y += this.ydir;

        if (head.x > w - 1) {
            head.x = 0;
        }
        if (head.x < 0) {
            head.x = w - 1;
        }
        if (head.y > h - 1) {
            head.y = 0;
        }
        if (head.y < 0) {
            head.y = h - 1;
        }

        this.tail.push(head);
    }

    draw() {
        this.drawer.fill(COLOR_GREEN);
        this.drawer.noStroke();

        for (let i = 0; i < this.tail.length; i++) {
            this.drawer.rect(this.tail[i].x, this.tail[i].y, 1, 1);
        }
    }
    grow() {
        let head = this.tail[this.tail.length - 1].copy();
        this.len++;
        this.tail.push(head);
    }

    eat(pos) {
        let x = this.tail[this.tail.length - 1].x;
        let y = this.tail[this.tail.length - 1].y;
        if (x == pos.x && y == pos.y) {
            this.grow();
            return true;
        }
        return false;
    }

    over() {
        let x = this.tail[this.tail.length - 1].x;
        let y = this.tail[this.tail.length - 1].y;
        for (let i = 0; i < this.tail.length - 1; i++) {
            let part = this.tail[i];
            if (part.x == x && part.y == y) {
                return true;
            }
        }
        return false;
    }
}