// auto.test.js
import Auto from './auto';

describe('Controlador de autitos', () => {
    it('debería mover el auto hacia adelante en dirección norte', () => {
        const auto = new Auto(1, 2, 'N');
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('1,3 N');
    });

    it('debería mover el auto hacia adelante en dirección este', () => {
        const auto = new Auto(1, 2, 'E');
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('2,2 E');
    });

    it('debería mover el auto hacia adelante en dirección sur', () => {
        const auto = new Auto(1, 2, 'S');
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('1,1 S');
    });

    it('debería mover el auto hacia adelante en dirección oeste', () => {
        const auto = new Auto(1, 2, 'W');
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('0,2 W');
    });

    it('debería girar a la derecha correctamente', () => {
        const auto = new Auto(1, 2, 'N');
        auto.mover('D');
        expect(auto.getPosicion()).toEqual('1,2 E');

        auto.mover('D');
        expect(auto.getPosicion()).toEqual('1,2 S');

        auto.mover('D');
        expect(auto.getPosicion()).toEqual('1,2 W');

        auto.mover('D');
        expect(auto.getPosicion()).toEqual('1,2 N');
    });

    it('debería girar a la izquierda correctamente', () => {
        const auto = new Auto(1, 2, 'N');
        auto.mover('I');
        expect(auto.getPosicion()).toEqual('1,2 W');

        auto.mover('I');
        expect(auto.getPosicion()).toEqual('1,2 S');

        auto.mover('I');
        expect(auto.getPosicion()).toEqual('1,2 E');

        auto.mover('I');
        expect(auto.getPosicion()).toEqual('1,2 N');
    });
});
