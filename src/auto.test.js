// auto.test.js
import Auto from './auto';

describe('Auto', () => {
    it('debería avanzar hacia adelante cuando la orientación es Norte', () => {
        const auto = new Auto(1, 2, 'N',5, 5);
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('1,3 N');
        
    });
    it('debería girar a la izquierda cuando la orientación es Norte', () => {
        const auto = new Auto(1, 2, 'N',5,5);
        auto.mover('I');
        expect(auto.getPosicion()).toEqual('1,2 O');
    });
    it('debería girar a la derecha cuando la orientación es Norte', () => {
        const auto = new Auto(1, 2, 'N',5,5);
        auto.mover('D');
        expect(auto.getPosicion()).toEqual('1,2 E');
    });
    it('debería avanzar hacia adelante cuando la orientación es Este', () => {
        const auto = new Auto(1, 2, 'E',5,5);
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('2,2 E',5,5);
    });
    it('debería girar a la izquierda cuando la orientación es Este', () => {
        const auto = new Auto(1, 2, 'E',5,5);
        auto.mover('I');
        expect(auto.getPosicion()).toEqual('1,2 N');
    });
    it('debería girar a la derecha cuando la orientación es Este', () => {
        const auto = new Auto(1, 2, 'E',5 ,5);
        auto.mover('D');
        expect(auto.getPosicion()).toEqual('1,2 S');
    });
    it('debería avanzar hacia adelante cuando la orientación es Sur', () => {
        const auto = new Auto(1, 2, 'S',5 , 5);
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('1,1 S');
    });
    it('debería girar a la izquierda cuando la orientación es Sur', () => {
        const auto = new Auto(1, 2, 'S',5 ,5);
        auto.mover('I');
        expect(auto.getPosicion()).toEqual('1,2 E');
    });
    it('debería girar a la derecha cuando la orientación es Sur', () => {
        const auto = new Auto(1, 2, 'S',5, 5);
        auto.mover('D');
        expect(auto.getPosicion()).toEqual('1,2 O');
    });
    it('debería avanzar hacia adelante cuando la orientación es Oeste', () => {
        const auto = new Auto(2, 2, 'O',5 ,5);
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('1,2 O');
    });
    it('debería girar a la izquierda cuando la orientación es Oeste', () => {
        const auto = new Auto(1, 2, 'O',5 ,5);
        auto.mover('I');
        expect(auto.getPosicion()).toEqual('1,2 S');
    });
    it('debería girar a la derecha cuando la orientación es Oeste', () => {
        const auto = new Auto(1, 2, 'O',5 ,5);
        auto.mover('D');
        expect(auto.getPosicion()).toEqual('1,2 N');
    });

    it('debería manejar una secuencia de comandos simple', () => {
        const auto = new Auto(1, 2, 'N',5 ,5);
        auto.ejecutarComandos('AA');
        expect(auto.getPosicion()).toEqual('1,4 N');
    });

    it('debería manejar una secuencia de comandos de  3 comandos', () => {
        const auto = new Auto(1, 2, 'N',5,5);
        auto.ejecutarComandos('AADDA');
        expect(auto.getPosicion()).toEqual('1,3 S');
    });

    it('debería manejar una secuencia de comandos de  4 comandos', () => {
        const auto = new Auto(1, 2, 'S',5,5);
        auto.ejecutarComandos('AA');
        expect(auto.getPosicion()).toEqual('1,0 S');
    });


    it('no debería permitir que el auto se mueva fuera del mapa', () => {
        const auto = new Auto(0, 0, 'S',5,5);
        auto.ejecutarComandos('A');
        expect(auto.getPosicion()).toEqual('0,0 S');
    });
    
});
