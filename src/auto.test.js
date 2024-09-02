// auto.test.js
import Auto from './auto';

describe('Auto', () => {
    it('debería avanzar hacia adelante cuando la orientación es Norte', () => {
        const auto = new Auto(1, 2, 'N');
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('1,3 N');
        
    });
    it('debería girar a la izquierda cuando la orientación es Norte', () => {
        const auto = new Auto(1, 2, 'N');
        auto.mover('I');
        expect(auto.getPosicion()).toEqual('1,2 W');
    });
    it('debería girar a la derecha cuando la orientación es Norte', () => {
        const auto = new Auto(1, 2, 'N');
        auto.mover('D');
        expect(auto.getPosicion()).toEqual('1,2 E');
    });
    it('debería avanzar hacia adelante cuando la orientación es Este', () => {
        const auto = new Auto(1, 2, 'E');
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('2,2 E');
    });
    it('debería girar a la izquierda cuando la orientación es Este', () => {
        const auto = new Auto(1, 2, 'E');
        auto.mover('I');
        expect(auto.getPosicion()).toEqual('1,2 N');
    });
    it('debería girar a la derecha cuando la orientación es Este', () => {
        const auto = new Auto(1, 2, 'E');
        auto.mover('D');
        expect(auto.getPosicion()).toEqual('1,2 S');
    });
    it('debería avanzar hacia adelante cuando la orientación es Sur', () => {
        const auto = new Auto(1, 2, 'S');
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('1,1 S');
    });
});
