// auto.test.js
import Auto from './auto.js';

describe('Auto Controlado', () => {
    
    describe('Mostrar la posicion del auto', () => {
        it('deberia mostrar la posición inicial', () => {
            const auto = new Auto(1, 2, 'N');
            expect(auto.getPosicion()).toEqual('1,2 N');
        });
    });

    describe("Mover Auto", () =>{
        it("Deberia mover al Norte", () =>{
            const auto = new Auto(1, 2, 'N');
            auto.mover('A');
            expect(auto.getPosicion()).toEqual('1,3 N');
        });

        it('debería avanzar  el este cuando recibe el comando A', () => {
            const auto = new Auto(1, 2, 'E');
            auto.mover('A');
            expect(auto.getPosicion()).toEqual('2,2 E');
        });

        it('debería girar a la derecha desde el norte a este', () => {
            const auto = new Auto(1, 2, 'N');
            auto.mover('D');
            expect(auto.getPosicion()).toEqual('1,2 E');
        });

        it('debería girar a la derecha desde el este a sur', () => {
            const auto = new Auto(1, 2, 'E');
            auto.mover('D');
            expect(auto.getPosicion()).toEqual('1,2 S');
        });
    });

});
