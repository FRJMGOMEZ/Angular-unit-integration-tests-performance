import { EventEmitter } from '@angular/core';

export class Player2 {
    hp: number
    hpChange = new EventEmitter<number>()
    constructor() {
        this.hp = 100;
    }
    wound(number: number) {
        if (number > this.hp) {
            this.hp = 0;
        } else {
            this.hp -= number
        }
        this.hpChange.emit(this.hp)
        return this.hp
    }
    heal(number: number) {
        if (number > (100 - this.hp)) {
            this.hp = 100
        } else {
            this.hp += number
        }
        this.hp
    }
}