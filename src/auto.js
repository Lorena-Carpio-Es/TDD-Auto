// auto.js
class Auto {
    constructor(x, y, orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }

    getPosicion() {
        return `${this.x},${this.y} ${this.orientation}`;
    }

    mover(comando) {
        const movimientos = {
            'N': { A: [0, 1], I: 'W', D: 'E' },
            'E': { A: [1, 0], I: 'N', D: 'S' },
            'S': { A: [0, -1], I: 'E', D: 'W' },
            'W': { A: [-1, 0], I: 'S', D: 'N' }
        };

        if (comando === 'A') {
            this.x += movimientos[this.orientation].A[0];
            this.y += movimientos[this.orientation].A[1];
        } else {
            this.orientation = movimientos[this.orientation][comando];
        }
    }
}

export default Auto;
