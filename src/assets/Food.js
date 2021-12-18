import { COLOR_RED } from "../properties";

export default class Food {
    constructor(p5) {
        this.drawer = p5;
        this.x = 0;
        this.y = 0;
    }
    spawn(rez) {
        this.x = (Math.floor(Math.random() *
            rez - 1) + 1) * 1;
        this.y = (Math.floor(Math.random() *
            rez - 1) + 1) * 1;
    }
    draw() {
        this.drawer.fill(COLOR_RED);
        this.drawer.rect(this.x, this.y, 1, 1);
    }
}