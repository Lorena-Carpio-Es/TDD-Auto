// auto.js
class Auto {
    constructor(x, y, orientation, maxX, maxY) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        this.maxX = maxX;
        this.maxY = maxY;
    }

    getPosicion() {
        return `${this.x},${this.y} ${this.orientation}`;
    }

    mover(comando) {
        const movimientos = {
            'N': { A: [0, 1], I: 'O', D: 'E' },
            'E': { A: [1, 0], I: 'N', D: 'S' },
            'S': { A: [0, -1], I: 'E', D: 'O' },
            'O': { A: [-1, 0], I: 'S', D: 'N' }
        };

        if (comando === 'A') {
            const nuevoX = this.x + movimientos[this.orientation].A[0];
            const nuevoY = this.y + movimientos[this.orientation].A[1];
    
            // Verificar si el movimiento está dentro de los límites del grid
            if (nuevoX >= 0 && nuevoY >= 0 && nuevoX <= this.maxX && nuevoY <= this.maxY) {
                this.x = nuevoX;
                this.y = nuevoY;
            }
        } else {
            this.orientation = movimientos[this.orientation][comando];
        }
    }

    ejecutarComandos(comandos) {
        for (let comando of comandos) {
            this.mover(comando);
        }
    }
}

export default Auto;
